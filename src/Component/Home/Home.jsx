import React from "react";
import Bannar from "./Bannar";
import Centered from "./Centered";
import Populeritems from "./Populeritems";
import Should from "./Should";
import Formourmenu from "./Formourmenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Centered></Centered>
      <Populeritems></Populeritems>
      <Should></Should>
      <Formourmenu></Formourmenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
