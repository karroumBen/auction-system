import { createBrowserRouter } from "react-router-dom";
import App from '../features/app';
import CustomerList from '../features/customers';
import SellerList from '../features/sellers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/customer",
    element: <CustomerList />,
  },
  {
    path: "/seller",
    element: <SellerList />,
  },
]);

export default router;