import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Network } from "./pages/network";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { Private } from "./private/private";
import { ErrorPage } from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/social",
    element: (
      <Private>
        <Network />
      </Private>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
