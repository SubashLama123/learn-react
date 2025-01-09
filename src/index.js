

// /src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ API
import App from "./App"; // Main App component
import "./index.css";
import { Provider } from "react-redux";
import store from '../src/app/store';

// Render the App to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>


);
