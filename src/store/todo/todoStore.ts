import { createStore } from "effector";
import { Todo } from "./todoState";
import { setNewItem, remove, addTodo, removeAll } from "./todoEvents";

interface Store {
  todos: Todo[];
  newItem: string;
}

export const addTodoToList = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
  },
];

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const initialState = {
  todos: [],
  newItem: "",
} as Store;

const storeDefault = createStore(initialState)
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
