import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import RootLayout from "../RootLayout/RootLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
