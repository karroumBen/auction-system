import { createBrowserRouter } from "react-router-dom";
import App from '../features/app';
import CustomerList from '../features/customers';
import SellerList from '../features/sellers';
import MainLayout from '../components/MainLayout';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import ProductDetails from '../components/ProductDetails';

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
        path: "/customers",
        element: <CustomerList />,
      },
      {
        path: "/sellers",
        element: <SellerList />,
      },
      {
        path: "/items/:id",
        element: <ProductDetails />,
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