import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { Error } from "./routes/Error";
import { ArticlePage } from "./routes/articles/:articleId/ArticlePage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BASE_URL = process.env.PUBLIC_URL;

const router = createBrowserRouter([
  {
    path: `${BASE_URL}/`,
    element: <App />,
  },
  {
    path: `${BASE_URL}/:articleId`,
    element: <ArticlePage />,
  },
  {
    path: `${BASE_URL}/*`,
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
