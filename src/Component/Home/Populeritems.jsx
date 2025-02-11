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
      <div>
        <button className="btn btn-outline border-0 border-b-2  block mx-auto hover:bg-black hover:text-white mt-4">
          View Full Menu
        </button>
        <div className="w-8/12 mx-auto h-20 bg-black mt-10">
          <p className="text-white text-center  text-3xl  py-5">
            Call Us: +88 0192345678910
          </p>
        </div>
      </div>
    </div>
  );
};

export default Populeritems;
