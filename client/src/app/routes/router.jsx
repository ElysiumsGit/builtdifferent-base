import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../../pages/Dashboard";

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
        path: "/orders",
        element: <div>Orders</div>,
      },
    ],
  },
]);

export default router;
