import { useState } from 'react';
import './design/main.css'
import { type Todo } from "./types/todo";
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList';



function App() {

  const [todos , setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (text: string) => {
    const newTodo: Todo ={
      id: Date.now(),
      text,
      completed:false
    };

    setTodos ((prev) => [...prev , newTodo]);
  }

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4">✅ Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}

export default App
