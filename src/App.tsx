import * as React from "react";
import TodoAdd from "./components/TodoAdd/todoAdd";
import TodoList from "./components/TodoList/todoList";

import { removeAll } from "./store/todo/todoEvents";

export function App() {
  return (
    <div className='root'>
      Items
      <TodoAdd />
      <TodoList />
      <button className='button' onClick={() => removeAll(null)}>Delete all</button>
    </div>
  );
}
