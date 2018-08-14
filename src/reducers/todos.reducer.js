import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants";

const initialState = [];

const actionsMap = {
    [ADD_TODO]: (state, action) => [...state, action.todo],
    [REMOVE_TODO]: (state, action) => state.filter(todo => todo.id !== action.id),
    [TOGGLE_TODO]: (state, action) => {
        const { id } = action;
        return state.map(todo => {
            if (todo.id === id) {
                todo.isFav = !todo.isFav;
            }
            return todo;
        });
    }
};

export default (state = initialState, action) => {
    const handler = actionsMap[action.type];

    return handler ? handler(state, action) : state;
};
