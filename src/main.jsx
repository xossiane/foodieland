import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import BlogContextProvider from "./context/BlogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogContextProvider>
  </React.StrictMode>
);
