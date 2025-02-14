import { createBrowserRouter } from "react-router-dom";
import Greet from "../components/auth/Greet";
import Login from "../components/auth/Login";
import AuthLayout from "../pages/AuthLayout";
import ProductPage from "../pages/ProductPage";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import { Role } from "../enums";
import ProductDetailPage from "../pages/ProductDetailPage";

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
  {
    path: "/products",
    element: (
      <RequireAuth fallbackPath={"/"}>
        <ProductPage />
      </RequireAuth>
    ),
  },
  {
    path: "/products/:id",
    element:(
      <RequireAuth fallbackPath={"/"}>
        <ProductDetailPage />
      </RequireAuth>
    )
  }
]);

export default router;
