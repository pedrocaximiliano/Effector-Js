import { addTodo, remove, removeAll, setNewItem } from "./todoEvents";

import store, { addTodoToList, removeTodo, getTodos } from "./todoStore";

const ResponseTodoMock = {
  todos: {
    id: 1,
    text: "cadeira",
  },
  newItem: "mesa",
};

const responseRemoveAll = {
  todos: [],
  newItem: "",
};

const addTodoListMock = [
  {
    id: 1,
    text: "4",
  },
];

describe("TODO", () => {
  it("should call API and response to be true", () => {
    addTodo(ResponseTodoMock);
    store.setState(ResponseTodoMock);
    expect(store.getState()).toEqual(ResponseTodoMock);
  });
  it("should call addTodoToList method and response to be true", () => {
    store.setState(addTodoListMock);
    addTodoToList(addTodoListMock, "newTodo");
    expect(store.getState()).toEqual(addTodoListMock);
  });
  it("should remove all TODOS", () => {
    removeAll(null);
    expect(store.getState()).toEqual(responseRemoveAll);
  });
  it("should remove each method", () => {
    remove(0);
    expect(store.getState()).toEqual(responseRemoveAll);
  });

  it("should render removeTodo method", () => {
    removeTodo([{ text: "mesa", id: 1 }], 0);
    expect(store.getState()).toEqual(responseRemoveAll);
  });

  it("should call getTodos methos and return to be success", () => {
    store.setState(addTodoListMock);
    expect(getTodos.doneData(ResponseTodoMock)).toStrictEqual(ResponseTodoMock);
  });

  it("should call getTodos methos and retorn to be fail", () => {
    store.setState(addTodoListMock);
    expect(getTodos.failData(ResponseTodoMock)).toStrictEqual(ResponseTodoMock);
  });
  it("should getTodos methos", async () => {
    store.setState(addTodoListMock);
    expect(getTodos(ResponseTodoMock)).toStrictEqual(ResponseTodoMock);
  });

  it("should setNewItem methos", async () => {
    store.setState(addTodoListMock);
    expect(setNewItem(ResponseTodoMock)).toStrictEqual(ResponseTodoMock);
  });
});
