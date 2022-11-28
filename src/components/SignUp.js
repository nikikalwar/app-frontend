import { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Mobileno, setMobileno] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Checked, setChecked] = useState();
  const [error, seterror] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((Checked, Name, Age, Mobileno, Email, Password)) {
      let body = {
        name: Name,
        age: Age,
        mobileno: Mobileno,
        email: Email,
        password: Password,
      };
      postSignUp(body);
    } else {
      seterror(true);
    }
  };

  const postSignUp = async (body) => {
    try {
      const signUp = await axios.post("http://localhost:3006/user-save", body);
      console.log(signUp);
    } catch (err) {
      alert("Error processing your request. Please resubmit the form");
    }
  };
  return (
    <>
      <form className="min-h-screen py-40  ">
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
            <h1 className="text-3xl mb-4">Register</h1>
            <p className="mb-4 font-semibold text-gray-500">
              Create Your Account. It's free and only takes a minute.
            </p>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md "
                  type="text"
                  placeholder="Enter FullName"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="text-red-300 ">*Mandatory fields</span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md "
                  type="number"
                  placeholder="Enter Age"
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <span className="text-red-300">*Mandatory Fields</span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md "
                  type="tel"
                  placeholder="Enter Mobile No."
                  value={Mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                />
                <span className="text-red-300">*Mandatory Fields</span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md"
                  type="email"
                  placeholder="Enter Email Address"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="text-red-300">*Mandatory Fields</span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md"
                  type="password"
                  placeholder="Choose Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="text-red-300">*Mandatory Fields</span>
              </div>
              <div className="flex flex-col">
                <div>
                  <input
                    type="checkbox"
                    className="  border border-gray-400 mx-2"
                    value={Checked}
                    onChange={() => setChecked(!Checked)}
                  />
                  <span>
                    I accept the
                    <span className="text-blue-600 font-semibold mx-1 cursor-pointer">
                      Terms of Use
                    </span>
                    &
                    <span className="text-blue-500 font-semibold mx-1 cursor-pointer">
                      Privacy Policy
                    </span>
                  </span>
                </div>

                {error && (
                  <span className="text-red-300 ">
                    *Tick Accept the Terms & Privacy Policy to Register{" "}
                  </span>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className=" py-2 bg-gradient-to-r from-violet-500 to-gray-300 text-gray-600 font-bold rounded-lg"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
