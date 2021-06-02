import { createEvent } from "effector";

export const setNewItem = createEvent<string>("setNewItem");
export const addTodo = createEvent("addTodo");
export const remove = createEvent<number>("remove");
export const removeAll = createEvent<null>("removeAll");
