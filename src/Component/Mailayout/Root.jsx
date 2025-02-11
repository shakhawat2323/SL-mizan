import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>SL-Mizan | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
