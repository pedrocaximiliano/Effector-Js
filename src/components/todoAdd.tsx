import * as React from "react";
import { useStore } from "effector-react";

import $store from "../store/todoAdd/todoAddStore";
import { setNewTodo, addTodo } from "../store/todoAdd/todoAddEvents";

function TodoAdd() {
  const store = useStore($store);

  return (
    <div style={{ marginBottom: 15 }}>
      <input
        placeholder="New item"
        value={store.newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
