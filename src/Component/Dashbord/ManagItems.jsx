import React from "react";
import SectionTitile from "../Home/SectionTitile";
import Usemenu from "../../Hooks/Usemenu";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import useAxios from "../../Hooks/useAxios";
import useAxiospublic from "../../Hooks/useAxiospublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManagItems = () => {
  const [Menu, _loding, refetch] = Usemenu();

  const axisoSecure = useAxios();

  const Deletebutton = (items) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axisoSecure.delete(`/menu/${items}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const UseraADminbutton = (items) => {
    console.log(items);
  };
  return (
    <div>
      <div>
        <SectionTitile
          hading="manage items"
          subHading={"hurry up"}
        ></SectionTitile>

        <div>
          <h1 className="text-3xl ">Totale Items {Menu.length}</h1>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Items Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Menu.map((items, index) => (
                <tr key={items._id}>
                  <td>{index + 1} </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={items.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{items.name}</td>
                  <td>${items.price}</td>
                  <td>
                    <Link to={`/deshboard/updateitems/${items._id}`}>
                      <button className="btn btn-ghost text-3xl text-white bg-amber-500">
                        <BiSolidEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => Deletebutton(items._id)}
                      className="btn btn-ghost text-3xl text-red-600"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagItems;
