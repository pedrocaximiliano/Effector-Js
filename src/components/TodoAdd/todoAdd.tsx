import * as React from "react";
import { useStore } from "effector-react";

import $store from "../../store/todo/todoStore";
import { setNewItem, addTodo } from "../../store/todo/todoEvents";

const TodoAdd = () => {

  const store = useStore($store);
  const { newItem } = store;

  return (
    <div>
      <input
        placeholder="New item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className='input'
      />
      <button className='button' onClick={() => addTodo()}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
