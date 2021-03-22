import { combineReducers, createStore } from "redux";
import produce from "immer";

export const SET_TODOVALUE = "todo/SET_TODOVALUE" as const;
export const SET_TODOS = "todo/SET_TODOS" as const;
export const REMOVE_TODOS = "todos/REMOVE_TODOS" as const;

const INITIAL_STATE: TodoState = {
  todoValue: "",
  todos: [
    {
      id: "1",
      text: "test",
      check: false,
    },
  ],
  searchTodo: [],
};

function todoReducer(state = INITIAL_STATE, action: TodoActions) {
  switch (action.type) {
    case SET_TODOVALUE:
      return produce(state, (draft) => {
        draft.todoValue = action.payload.todoValue;
      });
    case SET_TODOS:
      return produce(state, (draft) => {
        draft.todos = action.payload.todos;
      });
    default:
      return state;
  }
}

export const setTodoValue = (todoValue: string) => ({
  type: SET_TODOVALUE,
  payload: { todoValue },
});
export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: { todos },
});

export type TodoActions =
  | ReturnType<typeof setTodoValue>
  | ReturnType<typeof setTodos>;

export type Todo = {
  id: string;
  text: string;
  check: boolean;
};
export type TodoState = {
  todoValue: string;
  todos: Todo[];
  searchTodo: Todo[];
};

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;
