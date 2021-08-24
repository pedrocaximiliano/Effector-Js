import { addTodo, remove, removeAll, setNewItem } from "./TodoEvents";

import store, { addTodoToList, removeTodo, getTodos } from "./TodoStore";

const ResponseTodoMock = {
  todos: {
    id: 1,
    text: "cadeira",
  },
  newItem: "mesa",
} as any;

const responseRemoveAll = {
  todos: [],
  newItem: "",
} as any;

const addTodoListMock = [
  {
    id: 1,
    text: "4",
  },
] as any;

describe("TODO", () => {
  it("should call addTodo", () => {
    const resultAddTodo = addTodo();
    expect(resultAddTodo).toBeUndefined();
  });
  it("should call addTodoToList", () => {
    const mockResponse = [
      {
        id: 1,
        text: "4",
      },
      {
        id: 2,
        text: 'newItem'
      },
    ];
    store.setState(addTodoListMock);
    const response = addTodoToList(addTodoListMock, "newItem");
    expect(response).toEqual(mockResponse);
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
    removeTodo([{ text: "react", id: 1 }], 0);
    expect(store.getState()).toEqual(responseRemoveAll);
  });

  it("should call getTodos methos and return to be success", () => {
    store.setState(addTodoListMock);
    getTodos(ResponseTodoMock)
    expect(getTodos.doneData(ResponseTodoMock)).toStrictEqual(ResponseTodoMock);
  });

  it("should call getTodos methos and retorn to be fail", () => {
    store.setState(addTodoListMock);
    getTodos(ResponseTodoMock)
    expect(getTodos.failData(ResponseTodoMock)).toStrictEqual(ResponseTodoMock);
  });

  it("should setNewItem methos", () => {
    setNewItem(ResponseTodoMock);
    store.setState(ResponseTodoMock);
    expect(store.getState()).toEqual(ResponseTodoMock);
  });
});
