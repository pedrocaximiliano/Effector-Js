import * as React from "react";
import { useStore } from "effector-react";


import $store, { getTodos } from "../../store/todo/todoStore";
import { setNewItem, addTodo } from "../../store/todo/todoEvents";
import { createEvent } from "effector";

const TodoAdd = () => {
  const store = useStore($store);
  const { newItem } = store;
  const [teste, setTeste] = React.useState<string>()

  const showRules = createEvent<string>();

  const stopShowRules = showRules.watch(name => setTeste(name))
  if (teste) {
    return <div>
      <div id="myModal" className="modal">
        <div className="modal-content" >
          <button onClick={() => setTeste('')} >&times;</button>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  }
  return (
    <>
      <div>
        <div className='container'>
          <button className='button' onClick={() =>
            getTodos("http://demo7315882.mockable.io/courses"
            )
          }>Highlights</button>
          <button className='button' onClick={() => showRules('usuário')}>exibir regras</button>
          <button className='button' onClick={() => stopShowRules()}>não exibir </button>
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
