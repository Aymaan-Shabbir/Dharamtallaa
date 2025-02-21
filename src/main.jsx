import { Suspense, lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import App from "./App";

import Error from "./components/Error";
import Men from "./components/Men";
import Women from "./components/Women";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import Skeleton from "./components/Skeleton";

const Grocery = lazy(() => import("./components/Grocery"));
const Kids = lazy(() => import("./components/Kids"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/kids",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Kids />
          </Suspense>
        ),
      },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/about", element: <About /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/product/:productId", element: <ProductDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
