import { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [age, setage] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [checked, setchecked] = useState(false);
  const [error, seterror] = useState();

  //regex to validate inputs
  const NAME_REGEX = /[0-9!@#$%^&*()_+=?]/;
  const PHONE_REGEX = /[a-zA-Z!@#$%^&*()_+/]/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateInputs = () => {
      if (!checked) {
        alert("please click the checkbox");
      } else if (firstname.length < 1) {
        /*   else if(Age<10){
        alert("Please enter the age value above 10")
      } */
        alert("Please enter the firstName");
      } else if (lastname.length < 1) {
        alert("please enter the last name");
      } else if (password.length < 1) {
        alert("Please enter the Password");
      } else if (email.length < 1) {
        alert("Please enter the Email");
      } else return 1;
    };

    if (validateInputs()) {
      let body = {
        firstName: firstname,
        lastName: lastname,
        age: age,
        phone: mobileno,
        email: email,
        password: password,
      };
      //  postSignUp(body);
      simplePost(body);
    } else {
      seterror(true);
    }
  };

  const simplePost = async (data) => {
    try {
      const response = await fetch("http://localhost:3006/users/save-user", {
        method: "POST",
        mode: "cors",
        headers: {
          //  Authorization: `Bearer: ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log("response",await response.json())
      let serverResponse = await response.json();
      console.log(serverResponse, "serverResponse");
      if (serverResponse.message === "user exists") {
        alert("User exists, Please signIn or use another email address");
      } else alert("user sign-up successful", serverResponse.message);
    } catch (err) {
      alert("error in signing up");
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
            <h1 className="text-3xl mb-4">Register</h1>
            <p className="mb-4 font-semibold text-gray-500">
              Create Your Account. It's free and only takes a minute.
            </p>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col">
                <div className="flex justify-center gap-5">
                  <input
                    className="p-2 border-gray-400 border rounded-md "
                    type="text"
                    placeholder="FIRST NAME"
                    value={firstname}
                    onChange={(e) => {
                      if (!NAME_REGEX.test(e.target.value)) {
                        setfirstname(e.target.value);
                        const x = document.querySelector(".name-error");
                        x.style.visibility = "hidden";
                      } else {
                        document.querySelector(".name-error").style.visibility =
                          "";
                        //   x.style.visibility="block";
                      }
                    }}
                  />
                  <input
                    className="p-2 border-gray-400 border rounded-md "
                    type="text"
                    placeholder="LAST NAME"
                    value={lastname}
                    onChange={(e) => {
                      if (!NAME_REGEX.test(e.target.value)) {
                        setlastname(e.target.value);
                        const x = document.querySelector(".name-error");
                        x.style.visibility = "hidden";
                      } else {
                        document.querySelector(".name-error").style.visibility =
                          "";
                        //   x.style.visibility="block";
                      }
                    }}
                  />
                </div>

                <span
                  className="text-red-300 name-error"
                  style={{ visibility: "hidden" }}
                >
                  *Invalid characters not allowed
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md "
                  type="number"
                  placeholder="Enter Age"
                  value={age}
                  min={1}
                  onChange={(e) => setage(e.target.value)}
                />
                <span
                  className="text-red-300 age-error"
                  style={{ visibility: "hidden" }}
                >
                  *Mandatory Fields
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md "
                  type="tel"
                  placeholder="Enter Mobile No."
                  value={mobileno}
                  onChange={(e) => {
                    if (!PHONE_REGEX.test(e.target.value)) {
                      setmobileno(e.target.value);
                      document.querySelector(".phone-error").style.visibility =
                        "hidden";
                    } else {
                      console.log("invalid input", e.target.value);
                      document.querySelector(".phone-error").style.visibility =
                        "";
                    }
                  }}
                />
                <span
                  className="text-red-300 phone-error"
                  style={{ visibility: "hidden" }}
                >
                  *Mandatory Fields
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md"
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <span
                  className="text-red-300 email-error"
                  style={{ visibility: "hidden" }}
                >
                  *Mandatory Fields
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-2 border-gray-400 border rounded-md"
                  type="password"
                  placeholder="Choose Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <span
                  className="text-red-300 password-error"
                  style={{ visibility: "hidden" }}
                >
                  *Mandatory Fields
                </span>
              </div>
              <div className="flex flex-col">
                <div>
                  <input
                    type="checkbox"
                    className="  border border-gray-400 mx-2"
                    value={checked}
                    onChange={() => setchecked(!checked)}
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
