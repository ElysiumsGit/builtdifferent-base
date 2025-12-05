import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../../pages/Dashboard";
import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";
import User from "../../pages/User";

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
        path: "/users",
        element: <User />,
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
