import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // handleSignin
  const handleSignin = () => {
    console.log("handle sign in button ");
  };
  return (
    <>
      <form className="min-h-screen py-52  ">
        {/* left div */}
        <div className="flex mx-auto w-8/12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="hidden w-1/2 sm:none md:flex items-center  bg-gradient-to-r from-violet-500 to-gray-300 p-12">
            <div className=" flex flex-col">
              <h1 className="text-3xl font-extrabold mb-3 text-center ">
                WELCOME TO AUSADHI
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                ullam dolores magnam laudantium, ab assumenda eius doloremque
                delectus, laboriosam pariatur facere.
              </p>
            </div>
          </div>

          {/* right div */}
          <div className=" sm:w-full  md:w-1/2 px-8 py-10 bg-gray-100">
            <h1 className="text-3xl mb-4">Sign In</h1>
            <p className="mb-4 font-semibold text-gray-500">
              Log in to Your Account for Orders and Bookings
            </p>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md"
                  type="email"
                  value={Email}
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="text-red-300 ">*Mandatory fields</span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md"
                  type="password"
                  value={Password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="text-red-300 ">*Mandatory fields</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    className="border border-gray-200 mx-1"
                  />
                  <span className="font-semibold text-gray-500">
                    Remember Me
                  </span>
                </div>
                <Link to="/forgotpassword">
                  <p className="text-gray-500 underline hover:text-gray-700">
                    Forgot Password ?
                  </p>
                </Link>
              </div>

              <button
                onClick={handleSignin}
                className=" py-2 bg-gradient-to-r from-violet-500 to-gray-300 text-gray-600 font-bold rounded-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
