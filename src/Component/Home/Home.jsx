import React from "react";
import Bannar from "./Bannar";
import Centered from "./Centered";
import Populeritems from "./Populeritems";
import Should from "./Should";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Centered></Centered>
      <Populeritems></Populeritems>
      <Should></Should>
    </div>
  );
};

export default Home;
