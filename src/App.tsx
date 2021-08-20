import * as React from "react";
import TodoAdd from "./components/TodoAdd/TodoAdd";

import { removeAll } from "./store/todo/TodoEvents";

export function App() {
  return (
    <div className='root'>
      Courses
      <TodoAdd />
      <button className='button' onClick={() => removeAll(null)}>Delete all</button>
    </div>
  );
}
