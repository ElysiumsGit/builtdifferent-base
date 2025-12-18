import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../../pages/Dashboard";
import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import UserList from "../../pages/ManageUser/UserList";
import AddUser from "../../pages/ManageUser/AddUser";
import ProductAdd from "../../pages/Products/ProductAdd";
import ProductList from "../../pages/Products/ProductList";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "user/list",
        element: <UserList />,
      },
      {
        path: "user/add",
        element: <AddUser />,
      },
      {
        path: "product/list",
        element: <ProductList />,
      },
      {
        path: "product/add",
        element: <ProductAdd />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
