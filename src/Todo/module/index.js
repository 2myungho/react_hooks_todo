import { combineReducers, createStore } from "redux";

const INITIAL_STATE = {
  todos: [],
  searchTodo: [],
};

function todoReducer(state = INITIAL_STATE, action) {}

const rootReducer = combineReducers({});

const store = createStore(rootReducer);

export default store;
