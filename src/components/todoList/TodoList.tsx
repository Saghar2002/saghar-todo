import { type Todo } from "../../types/todo"
import TodoItem from "../todoItem/TodoItem";

interface Props {
 todos: Todo[];
 onToggle: (id: number) => void;
 onDelete: (id: number) => void;
}
const TodoList = ({todos, onToggle, onDelete}: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
         />
      ))}
    </ul>
  )
}

export default TodoList