import TodoListItem from "./TodoListItem";

export default function TodoList() {
  return (
    <div>
      This is a todo List.
      <TodoListItem item={{ id: 1, content: "hello", status: "" }} />
    </div>
  );
}
