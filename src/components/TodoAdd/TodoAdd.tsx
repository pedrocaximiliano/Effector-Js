import * as React from "react";
import { useStore } from "effector-react";
import $store, { getTodos } from "../../store/todo/TodoStore";
import { setNewItem, addTodo } from "../../store/todo/TodoEvents";
import { createEvent } from "effector-logger";

const TodoAdd = () => {
  const store = useStore($store);
  const { newItem } = store;

  const showRules = createEvent<string>();

  const stopShowRules = showRules.watch(name => window.alert('To add courses just type the name and select the add button',))

  return (
    <>
      <div>
        <div className='container'>
          <button className='button' onClick={() =>
            getTodos("http://demo7315882.mockable.io/courses"
            )
          }>Highlights</button>
          <button className='button' onClick={() => showRules('user')}>show rules</button>
          <button className='button' onClick={() => stopShowRules()}>no show </button>
        </div>
        <input
          placeholder="New item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className='input'
        />
        <button className='button' onClick={() => addTodo()}>Add Todo</button>
      </div>
    </>
  );
}

export default TodoAdd;
