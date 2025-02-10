import React from "react";
import SectionTitile from "./SectionTitile";
import Img from "../../assets/home/slide1.jpg";

const Should = () => {
  return (
    <div className="w-11/12 mx-auto">
      <SectionTitile
        subHading={"Should Try"}
        hading={"CHEF RECOMMENDS"}
      ></SectionTitile>
      <div className="flex items-center gap-5 mb-5">
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={Img} alt="Shoes" className="w-60 rounded-3xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="uppercase border-b-2- border-y-amber-500 btn">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={Img} alt="Shoes" className="w-60 rounded-3xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="uppercase border-b-2- border-y-amber-500 btn">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={Img} alt="Shoes" className="w-60 rounded-3xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="uppercase border-b-2- border-y-amber-500 btn">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Should;
