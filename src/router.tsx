import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import Home from "./pages/Home";
import NavbarAndFooter from "./layouts/NavbarAndFooter";
import AllBooks from "./pages/AllBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarAndFooter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
