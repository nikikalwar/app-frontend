// import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-200 w-full h-18 p-2">
        {/* Header FirstRow */}
        <div className=" flex items-center w-1/3">
          <div className="">
            <h1 className="text-2xl text-green-500 font-bold p-2">Ausadhi</h1>
          </div>
          <div className="ml-10 ">
            <p className="text-gray-600 font-light">Express Delivery to </p>
            <div className="flex items-center cursor-pointer">
              <p className="mr-1">Select Pincode</p>
              <MdOutlineArrowDropDown size={24} />
            </div>
          </div>
        </div>
        <div className="w-1/4 ">
          <input
            type="text"
            placeholder="Search Medicines & Health Products"
            className="p-2 w-full rounded-md outline-green-400"
          />
        </div>
        <div className="w-1/3 flex items-center justify-center gap-7 ">
          <div className="flex text-gray-600 cursor-pointer">
            <FaRegUser size={20} />
            <p className="mx-2">
              Hello,<span>Log In</span>
            </p>
          </div>
          <div className="flex text-gray-600 cursor-pointer">
            <CiDiscount1 size={24} />
            <p className="mx-2">Offers</p>
          </div>
          <div className="flex text-gray-600 cursor-pointer">
            <AiOutlineShoppingCart size={24} />
            <p className="mx-2">Cart</p>
          </div>
        </div>
      </nav>
    </>
  );
};
