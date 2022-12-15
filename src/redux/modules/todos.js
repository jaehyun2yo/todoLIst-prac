/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const CHECKED_TODO = "todos/CHECKED_TODO";

/* 액션 생성함수 만들기 */
let nextId = 1;
export const addTodo = (content) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    content,
    checked: false,
    deleted: false,
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

/* 초기 상태 선언 */
const initialState = [];

/* 리듀서 선언 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, deleted: true } : todo
      );
    case CHECKED_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );

    default:
      return state;
  }
}
