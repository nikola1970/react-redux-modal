import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants";

export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        text,
        id: Date.now(),
        isFav: false
    }
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});
