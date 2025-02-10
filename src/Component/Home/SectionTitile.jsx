import React from "react";

const SectionTitile = ({ hading, subHading }) => {
  return (
    <div className="w-4/12 mx-auto text-center py-8">
      <h1 className="text-yellow-700 mb-2">----{subHading}----</h1>
      <h1 className="text-4xl font-bold uppercase border-y-4 py-3 ">
        {hading}
      </h1>
    </div>
  );
};

export default SectionTitile;
