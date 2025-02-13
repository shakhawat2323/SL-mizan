import React from "react";
import useCart from "../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "./../../Hooks/useAxios";

const Card = () => {
  const [cart, refetch] = useCart();
  const Totalprice = cart.reduce((total, items) => total + items.price, 0);
  const axiosSecore = useAxios();

  const Deletebutton = (id) => {
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
        axiosSecore.delete(`/cards/${id}`).then((res) => {
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

  return (
    <div className="">
      <div className="flex justify-evenly items-center">
        <h1 className="text-4xl font-bold">Items : {cart.length}</h1>
        <h1 className="text-4xl font-bold">Total Price : {Totalprice}</h1>
        <button className="text-xl font-bold btn btn-primary">pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Imge</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((cartdata, index) => (
                <tr key={cartdata._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={cartdata.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cartdata.name}</td>
                  <td> $ {cartdata.price}</td>
                  <th>
                    <button
                      onClick={() => Deletebutton(cartdata._id)}
                      className="btn btn-ghost text-3xl text-red-600"
                    >
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
