import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import SearchBlogProvider from "./context/SearchBlogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchBlogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchBlogProvider>
  </React.StrictMode>
);
