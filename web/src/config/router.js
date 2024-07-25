import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Login from "../views/Login";
import Signup from "../views/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
