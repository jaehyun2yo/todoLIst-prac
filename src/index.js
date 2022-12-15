import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./redux/modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";

// 스토어 생성
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화
const store = createStore(rootReducer, composeWithDevTools());

// createStore 취소선이 그어지는 이유
// https://velog.io/@xmun74/Q-createStore-%EC%B7%A8%EC%86%8C%EC%84%A0-%EC%99%9C-%EA%B7%B8%EC%96%B4%EC%A7%80%EB%82%98
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
