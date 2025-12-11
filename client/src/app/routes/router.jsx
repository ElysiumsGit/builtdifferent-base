import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../../pages/Dashboard";
import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import UserList from "../../pages/ManageUser/UserList";
import AddUser from "../../pages/ManageUser/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/user/list",
        element: <UserList />,
      },
      {
        path: "/user/add",
        element: <AddUser />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
