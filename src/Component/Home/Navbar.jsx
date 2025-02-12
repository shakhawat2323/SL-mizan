import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/Logo/Logo.png";
import useAuth from "../../Hooks/useAuth";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, LogOut } = useAuth();
  const [cart] = useCart();
  console.log(cart);
  const navbutton = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/">CONTACT us</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/">DASHBOARD</NavLink>
      </li> */}
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      {/* <li>
        <NavLink to="/ourshop">Our Shop</NavLink>
      </li> */}
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
    </>
  );
  const handalbaton = () => {
    LogOut();
  };
  return (
    <div className="">
      <div className="navbar  h-16 bg-gray-200/30 backdrop-blur-lg fixed top-0 left-0 w-full shadow-lg z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content text-1xl font-bold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navbutton}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-30" src={Logo} alt="" />
            <NavLink className="text-3xl font-bold">SL-Mizan</NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl   ">{navbutton}</ul>
        </div>
        <div className="navbar-end">
          <div className=" mr-5">
            <button className="flex">
              <MdOutlineShoppingCart className="text-3xl font-bold" />
              <div className="badge badge-sm badge-secondary ">
                {cart.length}
              </div>
            </button>
          </div>
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user && (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  class="menu menu-sm dropdown-content text-2xl  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handalbaton}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <NavLink to="/login">
                  <button className="btn text-xl font-bold">Login</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
