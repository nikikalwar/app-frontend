import React, { useState } from "react";

export const ForgotPassword = () => {
  // states
  const [error, seterror] = useState(false);

  // resetPassword btn handler
  const resetPassword = () => {
    seterror(true);
  };
  return (
    <>
      <div className="min-h-screen py-40">
        <div className="flex flex-col w-[400px] h-[250px] rounded-lg shadow-lg mx-auto  justify-items-center px-10  py-10  bg-gray-200 ">
          <h1 className="text-gray-700 font-bold text-lg my-2">
            Reset Password ?
          </h1>
          <input
            placeholder="Enter Your Email"
            type="email"
            className="border border-gray-200 p-2 w-full rounded-lg outline-green-400  "
          />
          {error && <span className="text-red-400  "> *email not found</span>}
          <button
            onClick={resetPassword}
            className="flex justify-center items-center my-3  bg-green-500 py-2 px-10 text-md font-semibold rounded-md mb-10"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};
