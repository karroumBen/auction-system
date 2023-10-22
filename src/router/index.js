import { createBrowserRouter } from "react-router-dom";
import App from '../features/app';
import CustomerList from '../features/customers';
import SellerList from '../features/sellers';
import MainLayout from "../components/MainLayout";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/customer",
        element: <CustomerList />,
      },
      {
        path: "/seller",
        element: <SellerList />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

export default router;