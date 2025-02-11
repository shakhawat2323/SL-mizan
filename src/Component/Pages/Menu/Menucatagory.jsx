import React from "react";
import Menuitems from "../../Home/Menuitems";
import Menucover from "./Menucover";

const Menucatagory = ({ item, Titile, img }) => {
  return (
    <div className="pt-8">
      {Titile && <Menucover Img={img} Titile={Titile}></Menucover>}
      <div className="grid grid-cols-2 gap-5 w-10/12 mx-auto mt-16 ">
        {item.map((items, index) => (
          <Menuitems key={index} items={items}></Menuitems>
        ))}
      </div>
    </div>
  );
};

export default Menucatagory;
