import React from "react";
import SectionTitile from "../Home/SectionTitile";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiospublic from "../../Hooks/useAxiospublic";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Imgaehosting_key = import.meta.env.VITE_IMGE;
const ImgeHosting_API = `https://api.imgbb.com/1/upload?key=${Imgaehosting_key}`;

const Additem = () => {
  const axiospublic = useAxiospublic();
  const axiosSecore = useAxios();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiospublic.post(ImgeHosting_API, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuitems = {
        name: data.name,
        price: parseFloat(data.price),
        category: data.category,
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRs = await axiosSecore.post("/menu", menuitems);
      if (menuRs.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Data Add Seccessfully",
          showConfirmButton: false,
          timer: 500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitile
        hading="add to item"
        subHading="what's New?"
      ></SectionTitile>
      <div className="w-9/12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset  ">
            <legend className="fieldset-legend text-2xl ml-20">
              Recipe Name
            </legend>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input w-10/12 mx-auto"
              placeholder="Recipe Name"
            />
          </fieldset>

          <div className="flex items-center  w-10/12 mx-auto gap-4">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-2xl">Category</legend>
              <select
                {...register("category", { required: true })}
                defaultValue="Pick a browser"
                className="select"
              >
                <option disabled={true}>Select to the category</option>
                <option value="salad">Salad</option>
                <option value="pizza">pizza</option>
                <option value="soups">Soups</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">drinks</option>
              </select>
            </fieldset>
            <fieldset className="fieldset w-full ">
              <legend className="fieldset-legend text-2xl ">Price</legend>
              <input
                {...register("price", { required: true })}
                type="number"
                className="input "
                placeholder="Price"
              />
            </fieldset>
          </div>
          <div className=" w-10/12 mx-auto">
            <fieldset className="fieldset ">
              <legend className="fieldset-legend text-2xl">
                Recipe Details
              </legend>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea w-full h-40"
                placeholder="  Recipe Details"
              ></textarea>
            </fieldset>
          </div>
          <div className=" w-10/12 mx-auto py-5">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-neutral"
            />
          </div>

          <div className="w-10/12 mx-auto">
            <button className="btn btn-neutral text-xl font-bold">
              Add Item
              <FaUtensils
                className="ml-
              2"
              ></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additem;
