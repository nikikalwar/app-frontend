// react-icons
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const FeaturedCategories = [
    "Pet Care",
    "Personal Care",
    "Healthcare Devices",
    "Health Food and Drinks",
    "Beauty",
    "Elderly Care",
    "Home Care",
    "Mother and Baby Care",
    "Skin Care",
    "Fitness Supplements",
    "Diabetic Care",
    "Sexual Wellness",
    "Ayurvedic Care",
    "Health Condition",
    "Accessories & Wearables",
    "Top Products",
  ];

  return (
    <>
      <nav style={{ backgroundColor: "#EEF4FF" }}>
        <div className="flex  w-full h-auto text-center px-[40px] py-[45px]">
          {/* first-section */}
          <div className="flex flex-col w-1/4  text-left">
            <div className="mb-3">
              <h1 className="text-xl  text-gray-700 p-1 mb-1 ">Company</h1>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                About us
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Careers
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Blog
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                {" "}
                Partner with Ausadhi
              </p>
            </div>
            <div>
              <h1 className="text-xl  text-gray-700 p-1 mb-1 ">Our Services</h1>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Order Medicine
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Healthcare Products
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Lab Tests
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Surgeries
              </p>
            </div>
          </div>
          {/* second-section */}
          <div className="flex flex-col w-1/4  text-left">
            <div className="mb-3">
              <h1 className="text-xl  text-gray-700 p-1 mb-1 ">
                Featured Categories
              </h1>
              {FeaturedCategories.map((name, index) => {
                return (
                  <p
                    key={index}
                    className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 "
                  >
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
          {/* third-section */}
          <div className="flex flex-col w-1/4  text-left">
            <div className="mb-3">
              <h1 className="text-xl  text-gray-700 p-1 mb-2 ">Need Help ?</h1>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Browse All Stores
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Chat on 24x7 with Support
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Browse All Stores
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                FAQs
              </p>
            </div>
            <div>
              {/* other  */}
              <h1 className="text-xl  text-gray-700 p-1 mb-2 ">Policy Info</h1>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Editorial Policy
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Privacy Policy
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Vulnerability Disclosure Policy
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Terms and condition
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Customer Support Policy
              </p>
              <p className="text-gray-500 p-1 cursor-pointer hover:text-gray-700 ">
                Return Policy
              </p>
            </div>
          </div>
          {/* fourth -section */}
          <div className="w-1/4">
            <h1 className="text-xl font-bold  text-gray-700 p-1 mb-3 ">
              Follow Us On
            </h1>
            <div className="flex justify-center gap-5 ">
              <BsFacebook size={24} className="cursor-pointer" />
              <BsYoutube size={24} className="cursor-pointer" />
              <BsTwitter size={24} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex text-lg text-bold text-gray-500 py-4 px-2 justify-center">
          <h1>© 2022 Ausadhi. All Rights Reserved</h1>
        </div>
      </nav>
    </>
  );
};

export default Footer;
