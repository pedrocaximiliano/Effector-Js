import * as React from "react";
import { useStore } from "effector-react";

import $store from "../store/todoAdd/todoAddStore";

import { update, remove } from "../store/todoAdd/todoAddEvents";

function TodoList() {
  const store = useStore($store);
  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id}>
          <input
            value={todo.text}
            onChange={(evt) => update({ id: todo.id, text: evt.target.value })}
          />
          <button onClick={() => remove(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
