import { Link } from "react-router-dom";
import React, { useState } from "react";

import logo1 from "../images/logo1.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export const NavBar = () => {
  // useState
  const [inputSearch, setinputSearch] = useState("");
  const [userLoggedIn, setuserLoggedin] = useState(false);

  const categories = [
    {
      title: "Medicine",
      icon: <IoMdArrowDropdownCircle size={16} />,
    },
    {
      title: "Lab Tests",
      icon: null,
    },
    {
      title: "Surgeries",
      icon: null,
    },
    {
      title: "HealthCare",
      icon: <IoMdArrowDropdownCircle size={16} />,
    },
    {
      title: "Offers",
      icon: null,
    },
    {
      title: "Value Stores",
      icon: null,
    },
  ];
  return (
    <>
      <nav className="flex justify-between  items-center bg-gray-200 w-full h-[100px] p-2 shadow-lg  fixed z-50">
        {/* Header FirstRow */}
        <div className=" flex items-center w-1/3 justify-around">
          <Link to="/">
            <h1 className="text-3xl text-green-500 font-extrabold p-2">
              Ausadhi
            </h1>
          </Link>
          <div className="ml-10 hidden md:block ">
            <p className="text-gray-600 font-light">Express Delivery to </p>
            <div className="flex items-center  cursor-pointer">
              <p className="mr-1">Select Pincode</p>
              <MdOutlineArrowDropDown size={24} />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:block hidden ">
          <input
            type="text"
            placeholder="Search Medicines & Health Products"
            className="p-2 w-full rounded-md outline-green-400"
            value={inputSearch}
            onChange={(e) => setinputSearch(e.target.value)}
          />
        </div>
        <div className="w-1/3 flex items-center justify-center gap-7 ">
          <div className="flex text-gray-600 cursor-pointer">
            <AiOutlineShoppingCart size={24} />
            <p className="mx-2 hidden md:flex">Cart</p>
          </div>
          <div className="flex text-gray-600 cursor-pointer">
            <CiDiscount1 size={24} />
            <p className="mx-2 hidden md:flex">Offers</p>
          </div>

          {!userLoggedIn ? (
            <div className="hidden md:flex items-center text-gray-600 ">
              <FaRegUser size={20} />
              <div className="md:flex hidden items-center">
                <p className="mx-2 font-bold">
                  Hello,
                  <Link to="signin">
                    <span className="cursor-pointer font-normal pl-1">
                      Log In
                    </span>
                  </Link>
                  <span className="text-gray-400 ml-1">||</span>
                  <Link to="/signup">
                    <span className="cursor-pointer font-normal pl-1">
                      SignUp
                    </span>
                  </Link>
                </p>
                <span className="text-red-400 text-3xl font-bold mb-[30px]">
                  .
                </span>
              </div>
            </div>
          ) : (
            <div className=" hidden md:flex items-center  text-gray-600 ">
              <div className=" border-2 border-green-500 w-10 h-10 rounded-full cursor-pointer ">
                <img
                  src={logo1}
                  alt="profile"
                  className=" w-9 h-9 rounded-full object-cover"
                />
              </div>

              <p className="mx-2 font-semibold  ">
                Hello,
                <span className="cursor-pointer font-bold text-black">
                  MISHRA
                </span>
              </p>
            </div>
          )}
        </div>
      </nav>
      <div className="w-full h-16 bg-white flex justify-center items-center fixed top-[100px] z-50 gap-10 ">
        {categories.map(({ title, icon }, index) => (
          <div key={index}>
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:scale-105">
              <p className="text-gray-500">{title}</p>
              <span className="text-gray-700">{icon}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
