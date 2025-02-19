import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import App from "./App";
import Kids from "./components/Kids";
import Men from "./components/Men";
import Women from "./components/Women";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/kids", element: <Kids /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
