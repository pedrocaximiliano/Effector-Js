import { createStore, createEffect } from "effector";
import { Todo } from "./todoAddState";
import { setNewTodo, update, remove, addTodo } from "./todoAddEvents";

interface Store {
  todos: Todo[];
  newTodo: string;
}

export const getTodos = createEffect(async (url: string) => {
  const req = await fetch(url);
  return req.json();
});

export const addTodoToList = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const initialState = {
  todos: [],
  newTodo: "",
} as Store;

const storeDefault = createStore(initialState)
  .on(update, (state, { id, text }) => ({
    ...state,
    todos: updateTodo(state.todos, id, text),
  }))
  .on(remove, (state, id) => ({
    ...state,
    todos: removeTodo(state.todos, id),
  }))
  .on(setNewTodo, (state, newTodo) => ({ ...state, newTodo }))
  .on(addTodo, (state) => ({
    ...state,
    newTodo: "",
    todos: addTodoToList(state.todos, state.newTodo),
  }));
export default storeDefault;
