import { createBrowserRouter } from "react-router-dom";
import Root from "../Mailayout/Root";
import Home from "../Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/Shop/OurShop";
import Order from "../Pages/Order/Order";
import Loagin from "../Authentication/Loagin";
import SignUP from "../Authentication/SignUP";
import Privetroute from "../Authentication/Firebase/Privetroute";
import Dashborde from "../Dashbord/Dashborde";
import Card from "../Dashbord/Card";
import Alluser from "./../Dashbord/Alluser";
import Additem from "../Dashbord/Additem";
import PrivedAdmin from "../Authentication/Firebase/PrivedAdmin";
import ManagItems from "../Dashbord/ManagItems";
import UPdateitems from "../Dashbord/UPdateitems";

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
  {
    path: "/deshboard",
    element: (
      <Privetroute>
        <Dashborde></Dashborde>
      </Privetroute>
    ),
    children: [
      {
        path: "cart",
        element: <Card></Card>,
      },
      // admin deshboard
      {
        path: "alluser",
        element: (
          <PrivedAdmin>
            <Alluser></Alluser>
          </PrivedAdmin>
        ),
      },
      {
        path: "additem",
        element: (
          <PrivedAdmin>
            <Additem></Additem>
          </PrivedAdmin>
        ),
      },
      {
        path: "manageitems",
        element: (
          <PrivedAdmin>
            <ManagItems></ManagItems>
          </PrivedAdmin>
        ),
      },
      {
        path: "updateitems/:id",
        element: (
          <PrivedAdmin>
            <UPdateitems></UPdateitems>
          </PrivedAdmin>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
