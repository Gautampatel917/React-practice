const express = require('express');
const { createTodo, updateTodo, deleteTodo, getTodo } = require('../controller/todoController.js');
const { protect: authMiddleware } = require('../middleware/authMiddleware.js');

const router = express.Router();

//create the dodo
router.post('/todo', authMiddleware, createTodo);

//get the todo
router.get('/todos', authMiddleware, getTodo
);

//update & delete the todo
router.route('/todo/:id')
    .put(authMiddleware, updateTodo)
    .delete(authMiddleware, deleteTodo)

module.exports = router;
