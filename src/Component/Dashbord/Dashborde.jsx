import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCartShopping, FaListUl, FaUsers } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { LiaCommentDots } from "react-icons/lia";
import { FaCalendarDay } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import Logo from "../../../public/Logo/Logo.png";
import { FaUtensils } from "react-icons/fa";
import useAdmin from "./useAdmin";
import Usemenu from "../../Hooks/Usemenu";

const Dashborde = () => {
  const [isAdmin] = useAdmin();
  console.log(`Admin is ${isAdmin}`);

  return (
    <div className="flex ">
      <div className="w-64 min-h-screen  bg-orange-400">
        <div className="flex  flex-col justify-center items-center">
          <img className="w-32" src={Logo} alt="" />
          <h1 className="text-2xl font-black">SL-Mizan</h1>
          <h1 className="text-2xl font-black uppercase text-[#339933]">
            dashboard
          </h1>
        </div>
        <ul className="menu w-64 mx-auto  py-5  ">
          {isAdmin ? (
            <>
              {" "}
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <IoHome />
                  <p className="uppercase"> admin Home</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/additem"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaUtensils />
                  <p className="uppercase">add items</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/manageitems"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaListUl></FaListUl>
                  <p className="uppercase">manage items</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaUsers></FaUsers>
                  <p className="uppercase"> m bookings</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/pymenthistory"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <GiWallet />
                  <p className="uppercase"> pyment history</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/alluser"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaBook></FaBook>
                  <p className="uppercase"> all users</p>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <IoHome />
                  <p className="uppercase"> User Home</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaCalendarAlt />
                  <p className="uppercase">Reservation</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/pymenthistory"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <GiWallet />
                  <p className="uppercase"> pyment history</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaCartShopping className=""></FaCartShopping>
                  <p className="uppercase"> My cart</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <LiaCommentDots />
                  <p className="uppercase"> add review</p>
                </NavLink>
              </li>
              <li className="mb-3 ">
                <NavLink
                  to="/deshboard/cart"
                  className="text-xl text-white bg-[#3B25C1]  font-bold"
                >
                  <FaCalendarDay />
                  <p className="uppercase"> my booking</p>
                </NavLink>
              </li>{" "}
            </>
          )}

          <div className="divider"></div>
          <li className="mb-3 ">
            <NavLink
              to="/"
              className="text-xl text-white bg-[#3B25C1]  font-bold"
            >
              <IoHome />
              <p className="uppercase"> Home</p>
            </NavLink>
          </li>
          <li className="mb-3 ">
            <NavLink
              to="/menu"
              className="text-xl text-white bg-[#3B25C1]  font-bold"
            >
              <MdOutlineMenu />
              <p className="uppercase"> our menu </p>
            </NavLink>
          </li>
          <li className="mb-3 ">
            <NavLink
              to="/order/salad"
              className="text-xl text-white bg-[#3B25C1]  font-bold"
            >
              <BiSolidFoodMenu />
              <p className="uppercase"> order food</p>
            </NavLink>
          </li>
          {/* funn korar jonno star  */}
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashborde;
