const Todo = require('../model/todoSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

//Create Todo

exports.createTodo = catchAsync(async (req, res, next) => {
    const { task } = req.body;
    if (!task) {
        return next(new AppError('Task is required', 400));
    }

    const todo = new Todo({
        task,
        user: req.user.id
    })
    await todo.save();
    res.status(201).json({
        message: `Todo created successfully`,
        todo
    })
})

//Get todo for the user
exports.getTodo = catchAsync(async (req, res, next) => {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);

    if (!todos) {
        res.status(204).json({
            status: 'success',
            message: 'No content available'
        })
    }
})

//update the todo
exports.updateTodo = catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const { task } = req.body;

        const todo = await Todo.findById(id);
        if (!todo || todo.user.toString() !== req.user.id) {
            return next(new AppError('Todo not found or unauthorize', 401));
        }
        todo.task = task;
        await todo.save();

        res.status(201).json({
            status: "success",
            message: 'Todo updated successfully',
            todo
        })
})

//Delete todo
exports.deleteTodo = catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo || todo.user.toString() !== req.user.id) {
            return next(new AppError('Todo not found or Unauthorize', 401));
        }
        await todo.remove();
        res.status(204).json({
            status: 'success',
            message: 'todo deleted successfully!'
        })
})