import React from "react";

const Foodcard = ({ items }) => {
  const { name, recipe, image, category, price } = items;

  return (
    <div className="h-[400px]">
      <div className="card bg-blue-200 w-96 shadow-2xl p-5 h-full flex flex-col">
        <figure className="h-1/2 rounded-4xl">
          <img className="  p-3 " src={image} alt={name} />
        </figure>
        <div className="card-body flex flex-col justify-between h-1/2">
          <div>
            <h2 className="card-title text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-700">{recipe}</p>
          </div>
          <div className="card-actions flex justify-between items-center">
            <p className="text-xl font-bold text-gray-900">${price}</p>
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
