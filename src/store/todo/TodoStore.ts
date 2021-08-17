import { createDomain } from "effector-logger";
import { Todo } from "./TodoState";
import { setNewItem, remove, addTodo, removeAll } from "./TodoEvents";

export interface IStore {
  todos: Todo[];
  newItem: string;
}

const myDomain = createDomain();

export const addTodoToList = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
  },
];

export const getTodos = myDomain.effect(async (url: string) => {
  return (await fetch(url)).json();
});

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const initialState = {
  todos: [],
  newItem: "",
} as IStore;

const storeDefault = myDomain
  .store(initialState)
  .on(getTodos.doneData, (state, todos) => ({
    ...state,
    todos,
  }))
  .on(getTodos.failData, () => ({ newItem: "", todos: [] } as IStore))
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
