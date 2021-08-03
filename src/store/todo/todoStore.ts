import { createDomain } from "effector";
import { Todo } from "./todoState";
import { setNewItem, remove, addTodo, removeAll } from "./todoEvents";

export interface Store {
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
  return await (await fetch(url)).json();
});

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const initialState = {
  todos: [],
  newItem: "",
} as Store;

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
