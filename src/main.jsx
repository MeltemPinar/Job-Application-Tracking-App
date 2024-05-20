import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";
import { Provider } from "react-redux";
import store from "../src/redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);