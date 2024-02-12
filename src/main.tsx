import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from "./components/Error";
import CV from "./components/CV";
import NotFound from "./components/NotFound";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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

//@ts-expect-error
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
