import { createEvent } from "effector";

export const setNewTodo = createEvent<string>("setNewTodo");
export const addTodo = createEvent<any>("addTodo");
export const update = createEvent<{ id: number; text: string }>("update");
export const remove = createEvent<number>("remove");
