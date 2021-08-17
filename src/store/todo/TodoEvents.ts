import { createEvent } from "effector-logger";

export const setNewItem = createEvent<string>("setNewItem");
export const addTodo = createEvent<void>("addTodo");
export const remove = createEvent<number>("remove");
export const removeAll = createEvent<null>("removeAll");
