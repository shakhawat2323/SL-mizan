import React from "react";
import Menuitems from "../../Home/Menuitems";
import Menucover from "./Menucover";
import { Link } from "react-router-dom";

const Menucatagory = ({ item, Titile, img }) => {
  return (
    <div className="pt-8">
      {Titile && <Menucover Img={img} Titile={Titile}></Menucover>}
      <div className="grid grid-cols-2 gap-5 w-10/12 mx-auto mt-16 ">
        {item.map((items, index) => (
          <Menuitems key={index} items={items}></Menuitems>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${Titile}`}>
          <button className="btn btn-outline border-0 border-b-2  hover:bg-black hover:text-white mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menucatagory;
