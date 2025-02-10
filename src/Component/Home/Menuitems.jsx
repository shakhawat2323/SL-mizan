import React from "react";

const Menuitems = ({ items }) => {
  const { price, category, image, recipe, name } = items;
  return (
    <div className="mb-5">
      <div className="flex space-x-4 ">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[120px] "
          src={image}
          alt=""
        />
        <div>
          <h2 className="uppercase">{name} ---------</h2>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default Menuitems;
