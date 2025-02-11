import React from "react";

const Foodcard = ({ items }) => {
  const { name, recipe, image, category, price } = items;

  return (
    <div className="h-[400px]">
      <div className="card bg-blue-200 w-96 shadow-2xl  h-full ">
        <figure className="h-1/2 ">
          <img className="p-2" src={image} alt={name} />
        </figure>
        <p className="text-xl font-bold bg-black text-white absolute right-0 mt-3 mr-5 px-3 py-3 rounded-2xl">
          ${price}
        </p>
        <div className="card-body ">
          <div>
            <h2 className="text-xl font-bold text-center">{name}</h2>
            <p className=" text-sm py-2 font-bold">{recipe}</p>
          </div>
          <div className=" text-center">
            <button className="btn btn-outline border-0 font-bold border-b-4 border-orange-400 bg-slate-100 hover:bg-black hover:border-0 hover:text-white   px-10 py-5 rounded-lg ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
