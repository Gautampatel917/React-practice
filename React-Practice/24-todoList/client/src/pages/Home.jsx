import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [loading, setLoading] = useState((true));
    const [error, setError] = useState('');

    useEffect(() => {
        try {
            axios.get('/todos', { todos })
                .then((response) => setTodos(response.data.todos))
                .catch((error) => setError("Something went wrong when fetching todo..."))
                .finally(() => setLoading(false));
        }
        catch (error) {
            console.log("Something went very wrong 💥" + error);
        }
    }, []);

    const addTodo = (e) => {
        e.preventDefault();
        axios.post('/todo', { task })
            .then(response => {
                setTodos([...todos, response.data.newTodo]);
                setTask('');
            })
            .catch(error => setError("something went wrong while add todo"))
            .finally(() => setLoading(null))
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h3>My To-Do List</h3>
            <form onSubmit={addTodo}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task" />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;   