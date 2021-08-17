import * as React from "react";
import { useStore } from "effector-react";

import $store, { getTodos } from "../../store/todo/TodoStore";

import { remove } from "../../store/todo/TodoEvents";

function TodoList() {

  const store = useStore($store);
  const { todos } = store;
  const loading = useStore(getTodos.pending)

  if (loading) {
    return <div className='text'> Loading...</div>
  }

  if (todos.length === 0) {
    return <div className='text'>no course</div>
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            value={todo.text}
            className='input'
            onChange={() => { }}
          />
          <button className='button' onClick={() => remove(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
