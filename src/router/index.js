import { createBrowserRouter } from "react-router-dom";
import App from '../features/app';
import CustomerList from '../features/customers';
import SellerList from '../features/sellers';
import MainLayout from '../components/MainLayout';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import ProductDetails from '../components/ProductDetails';
import NotAuthorizedPage from '../components/NotAuthorizedPage';
import PageNotFound from '../components/PageNotFound';
import TransactionList from '../components/TransactionList';

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
      },
      {
        path: "/unauthorized",
        element: <NotAuthorizedPage />,
      },
      {
        path: "/transactions",
        element: <TransactionList />,
      },
    ]
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
    path: "*",
    element: <PageNotFound />,
  }
]);

export default router;