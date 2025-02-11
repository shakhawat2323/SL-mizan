import React from "react";
import SectionTitile from "./SectionTitile";
import Imge from "../../assets/home/featured.jpg";
import "./Home.css";

const Formourmenu = () => {
  return (
    <div className="featured-items bg-fixed text-white pt-8 my-10">
      <div>
        <SectionTitile
          subHading="Check it out"
          hading="FROM OUR MENU"
        ></SectionTitile>
        <div className="flex justify-center items-center bg-[#62748e7c] bg-opacity-40 py-8 px-16">
          <div>
            <img src={Imge} alt="" />
          </div>
          <div className="ml-10">
            <h1>March 20, 2023</h1>
            <p className="uppercase">where can i get some</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In enim
              ad minima, quibusdam minus sint deleniti veritatis, culpa
              accusantium dolores perspiciatis neque tempore reiciendis
              accusamus quia recusandae adipisci distinctio nobis.
            </p>
            <button className="btn btn-outline border-0 border-b-2  hover:bg-black hover:text-white mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formourmenu;
