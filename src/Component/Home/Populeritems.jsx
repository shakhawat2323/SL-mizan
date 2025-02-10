import React, { useEffect, useState } from "react";
import SectionTitile from "./SectionTitile";
import Menuitems from "./Menuitems";

const Populeritems = () => {
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populer = data.filter((items) => items.category === "popular");
        setMenu(populer);
      });
  }, []);
  console.log(Menu);
  return (
    <div>
      <SectionTitile
        hading={"From Our Menu"}
        subHading={"populer Items"}
      ></SectionTitile>
      <div className="grid grid-cols-2 gap-5 w-10/12 mx-auto ">
        {Menu.map((items, index) => (
          <Menuitems key={index} items={items}></Menuitems>
        ))}
      </div>
    </div>
  );
};

export default Populeritems;
