import { createDomain } from "effector";
import { Todo } from "./todoState";
import { setNewItem, remove, addTodo, removeAll } from "./todoEvents";

interface Store {
  todos: Todo[];
  newItem: string;
}
const todoStoreDomain = createDomain();

export const addTodoToList = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
  },
];

export const getTodos = todoStoreDomain.effect(async (url: string) => {
  const req = await fetch(url);
  console.log(req);
  return req.json();
});

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const initialState = {
  todos: [],
  newItem: "",
} as Store;

getTodos.done.watch(({ params, result }) => {
  console.log("Call with params", params);
  console.log("resolved with value", result);
});

getTodos.fail.watch(({ params, error }) => {
  console.log("4545454", error);
});

const storeDefault = todoStoreDomain
  .store(initialState)
  .on(getTodos.doneData, (state, todos) => ({
    ...state,
    todos,
  }))
  .on(getTodos.failData, () => ({ newItem: "", todos: [] } as Store))
  .on(remove, (state, id) => ({
    ...state,
    todos: removeTodo(state.todos, id),
  }))
  .reset(removeAll)
  .on(setNewItem, (state, newItem) => ({ ...state, newItem }))
  .on(addTodo, (state) => ({
    ...state,
    newItem: "",
    todos: addTodoToList(state.todos, state.newItem),
  }));

export default storeDefault;
