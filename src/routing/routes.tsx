import { createBrowserRouter } from "react-router-dom";
import Greet from "../components/auth/Greet";
import Login from "../components/auth/Login";
import AuthLayout from "../pages/AuthLayout";
import ProductPage from "../pages/ProductPage";
import { Role } from "../enums";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Greet />,
      },
      {
        path: "login/buyer",
        element: <Login role={Role.BUYER} />,
      },
      {
        path: "login/seller",
        element: <Login role={Role.SELLER} />,
      },
    ],
  },
  { path: "/products", element: <ProductPage /> },
]);

export default router;
