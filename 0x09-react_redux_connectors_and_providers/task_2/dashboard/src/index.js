import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { Provider, thunk } from "react-redux";
import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(uiReducer, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
