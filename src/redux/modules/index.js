
import { combineReducers } from "redux";
import todos from "./todos";
// 여러개의 리듀서가 있다면 하나로 합칠  루트 리듀서를 만들어보자.

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
