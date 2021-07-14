import * as React from "react";
import { useStore } from "effector-react";

import $store, { getTodos } from "../../store/todo/todoStore";
import { setNewItem, addTodo } from "../../store/todo/todoEvents";

const TodoAdd = () => {

  const store = useStore($store);
  const { newItem } = store;

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '20%'
      }}>
        <button style={{
          height: 50,
          width: '100%'
        }} onClick={() =>
          getTodos(
            "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
          )
        }>carregar itens</button>
      </div>
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
