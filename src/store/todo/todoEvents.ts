import { createEvent } from "effector";

export const setNewItem = createEvent<string>("setNewItem");
export const addTodo = createEvent<any>("addTodo");
export const remove = createEvent<number>("remove");
export const removeAll = createEvent<null>("removeAll");
