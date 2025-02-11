import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
  const location = useLocation();
  console.log(location);
  const NohedarandFooter = location.pathname.includes("login");
  const Nohedarsign = location.pathname.includes("signup");
  console.log(NohedarandFooter);
  return (
    <div>
      <Helmet>
        <title>SL-Mizan | Home</title>
      </Helmet>
      {NohedarandFooter || Nohedarsign || <Navbar></Navbar>}
      <Outlet></Outlet>

      {NohedarandFooter || Nohedarsign || <Footer></Footer>}
    </div>
  );
};

export default Root;
