import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";

const Foodcard = ({ items }) => {
  const { user } = useAuth();
  const { name, recipe, image, category, price, _id } = items;
  const naviget = useNavigate();
  const location = useLocation();
  const axiosSecore = useAxios();

  const AddTOcarddata = (Food) => {
    if (user && user.email) {
      const cartTime = {
        Items: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecore.post("/card", cartTime).then((result) => {
        console.log(result.data);
        if (result.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${name} Add to your Card`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Are you Not Login?",
        text: "PlZ login to the add to tha card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          naviget("/login", { state: { from: { location } } });
          //   Swal.fire({
          //     title: "Deleted!",
          //     text: "Your file has been deleted.",
          //     icon: "success",
          //   });
        }
      });
    }
  };

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
            <button
              onClick={() => AddTOcarddata(items)}
              className="btn btn-outline border-0 font-bold border-b-4 border-orange-400 bg-slate-100 hover:bg-black hover:border-0 hover:text-white   px-10 py-5 rounded-lg "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
