import { combineReducers } from "redux";

import todosReducer from "./todos.reducer";
import modalsReducer from "./modals.reducer";

export default combineReducers({
    todos: todosReducer,
    modals: modalsReducer
});
