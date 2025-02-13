import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const Alluser = () => {
  const axisoSecure = useAxios();

  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axisoSecure.get("/user");
      return res.data;
    },
  });

  const Deletebutton = (users) => {
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
        axisoSecure.delete(`/users/${users}`).then((res) => {
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
  const UseraADminbutton = (users) => {
    axisoSecure.patch(`/user/admin/${users._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        console.log(res.data);
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `{${users.name} is a Admin}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h1 className="text-2xl font-bold ">All User {user.length}</h1>
        <h1 className="text-2xl font-bold ">Total User</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {user.map((users, index) => (
                <tr key={users._id}>
                  <th> {index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    {users.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => UseraADminbutton(users)}
                        className="btn btn-ghost text-3xl text-white bg-amber-500"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => Deletebutton(users._id)}
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

export default Alluser;
