import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Make sure the server is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await axios.post(API_URL, { text: newTodo });
      setTodos([response.data, ...todos]);
      setNewTodo('');
      setError('');
    } catch (err) {
      setError('Failed to add todo');
      console.error('Error adding todo:', err);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
      setError('');
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>MERN Todo List</h1>
        <p>Simple todo application with React, Express, and MongoDB</p>
      </div>

      {error && <div className="error">{error}</div>}

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading todos...</div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo._id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo._id)}
                className="todo-checkbox"
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {!loading && todos.length === 0 && (
        <div className="loading">No todos yet. Add one above!</div>
      )}
    </div>
  );
}

export default App;
