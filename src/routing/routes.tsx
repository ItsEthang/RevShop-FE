import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/products", element: <ProductPage /> },
]);

export default router;
