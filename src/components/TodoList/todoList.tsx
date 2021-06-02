import * as React from "react";
import { useStore } from "effector-react";

import $store from "../../store/todo/todoStore";

import { remove } from "../../store/todo/todoEvents";

function TodoList() {

  const store = useStore($store);
  const { todos } = store;

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            value={todo.text}
            className='input'
          />
          <button className='button' onClick={() => remove(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
