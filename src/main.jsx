import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import App from "./App";
import Kids from "./components/Kids";
import Error from "./components/Error";
import Men from "./components/Men";
import Women from "./components/Women";
import ProductDetails from "./components/ProductDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      { path: "/kids", element: <Kids /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/product/:productId", element: <ProductDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
