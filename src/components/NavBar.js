import { Link } from "react-router-dom";
import logo from "../images/logo.png";
export const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 w-full h-18 p-2">
        <Link to="/">
          <div className="w-[80px] h-[80px]">
            <img src={logo} alt="logo" className="object-cover p-2" />
          </div>
        </Link>
        <ul className="flex text-white p-4 ">
          <Link to="/signup">
            <li className="p-2 font-extrabold text-lg hover:text-green-500 cursor-pointer">
              SIGNUP
            </li>
          </Link>
          <Link to="/signin">
            <li className="p-2 font-extrabold text-lg hover:text-green-500 cursor-pointer">
              SIGNIN
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
