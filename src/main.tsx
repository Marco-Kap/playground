import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CV from "./components/CV";
import NotFound from "./components/NotFound";
import Portfolio from "./components/Portfolio";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "resume",
    element: <CV />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <NotFound />,
  },
]);

//@ts-expect-error ts(2339)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
