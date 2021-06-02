
import {
  addTodo,
  remove,
  removeAll,
  setNewItem,
} from './todoEvents';
import store, { addTodoToList, removeTodo } from './todoStore';

const ResponseTodoMock = {
  todos: {
    id: 1,
    text: "cadeira"
  },
  newItem: "mesa"
}

const responseRemoveAll = {
  todos: [],
  newItem: ""
}

const addTodoListMock =
  [
    {
      id: 1,
      text: "4"
    }
  ];


describe('todo', () => {
  it('should 1', async () => {
    addTodo(ResponseTodoMock);
    store.setState(ResponseTodoMock)
    expect(store.getState()).toEqual(ResponseTodoMock);
  });
  it('should 6', () => {
    store.setState(addTodoListMock)
    addTodoToList(addTodoListMock, 'newTodo')
    expect(store.getState()).toEqual(addTodoListMock);
  });
  it('should 2', () => {
    removeAll(null)
    expect(store.getState()).toEqual(responseRemoveAll);
  });
  it('should 5', () => {
    remove(0)
    expect(store.getState()).toEqual(responseRemoveAll);
  });

  it('should 4', () => {
    removeTodo([{ text: 'mesa', id: 1 }], 0)
    expect(store.getState()).toEqual(responseRemoveAll);
  });
  it('should 3', () => {
    setNewItem('caneta')
    expect(store.getState().newItem).toBe("caneta");
  });
});
