import React from "react";
import ReactDOM from "react-dom/client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import "./index.css";
import App from "./App";

//react-router-dom
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
