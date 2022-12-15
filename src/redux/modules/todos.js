import { v4 as uuidv4 } from "uuid";
/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const CHECKED_TODO = "todos/CHECKED_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";

/* 액션 생성함수 만들기 */

export const addTodo = (content) => ({
  type: ADD_TODO,
  todo: {
    id: uuidv4(),
    content,
    checked: false,
    deleted: false,
    edited: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const checkedTodo = (id) => ({
  type: CHECKED_TODO,
  id,
});

export const updateTodo = (id, content) => ({
  type: UPDATE_TODO,
  id,
  content,
});

/* 초기 상태 선언 */
const initialState = [];

/* 리듀서 선언 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    case DELETE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, deleted: true } : todo
      );
    case CHECKED_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, content: action.content, edited: !todo.edited }
          : todo
      );

    default:
      return state;
  }
}
