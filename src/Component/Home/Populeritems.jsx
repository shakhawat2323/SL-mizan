import React, { useEffect, useState } from "react";
import SectionTitile from "./SectionTitile";
import Menuitems from "./Menuitems";
import Usemenu from "../../Hooks/Usemenu";

const Populeritems = () => {
  const [Menu] = Usemenu();
  const populer = Menu.filter((items) => items.category === "popular");
  return (
    <div>
      <SectionTitile
        hading={"From Our Menu"}
        subHading={"populer Items"}
      ></SectionTitile>
      <div className="grid grid-cols-2 gap-5 w-10/12 mx-auto ">
        {populer.map((items, index) => (
          <Menuitems key={index} items={items}></Menuitems>
        ))}
      </div>
    </div>
  );
};

export default Populeritems;
