import { type Todo } from "../../types/todo"

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
const TodoItem = ({todo, onToggle, onDelete}: Props) => {
  return (
    <li>
      <span onClick={() => onToggle(todo.id)}
      style={{
         textDecoration: todo.completed ? "line-through" : "none"
      }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  )
}

export default TodoItem