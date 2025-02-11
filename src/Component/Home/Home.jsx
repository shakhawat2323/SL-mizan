import React from "react";
import Bannar from "./Bannar";
import Centered from "./Centered";
import Populeritems from "./Populeritems";
import Should from "./Should";
import Formourmenu from "./Formourmenu";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
import Callnumber from "./Callnumber";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SL-Mizan | Home</title>
      </Helmet>
      <Bannar></Bannar>
      <Centered></Centered>
      <Populeritems></Populeritems>
      <Callnumber></Callnumber>
      <Should></Should>
      <Formourmenu></Formourmenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
