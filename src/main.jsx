import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./pages/error";
import Login from "./pages/login";
import ProductPage from "./pages/products";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center min-h-screen items-center">
        <p className="text-3xl font-bold">Hello World</p>
      </div>
    ),
    errorElement: <Error></Error>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
