import { createBrowserRouter } from "react-router-dom";
import Root from "../Mailayout/Root";
import Home from "../Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/Shop/OurShop";
import Order from "../Pages/Order/Order";
import Loagin from "../Authentication/Loagin";
import SignUP from "../Authentication/SignUP";
import Privetroute from "../Authentication/Firebase/Privetroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/ourshop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Loagin></Loagin>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
]);
