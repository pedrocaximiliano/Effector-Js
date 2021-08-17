import * as React from "react";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";

import { removeAll } from "./store/todo/TodoEvents";

export function App() {
  return (
    <div className='root'>
      Courses
      <TodoAdd />
      <TodoList />
      <button className='button' onClick={() => removeAll(null)}>Delete all</button>
    </div>
  );
}
