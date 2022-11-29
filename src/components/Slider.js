import React, { useState } from "react";

// importing images
import photo1 from "../images/featuredImage/photo1.jpg";
import photo2 from "../images/featuredImage/photo2.jpg";
import photo3 from "../images/featuredImage/photo3.jpg";
import photo4 from "../images/featuredImage/photo4.jpg";

// react-icons
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

let count = 0;
export const Slider = () => {
  const FeaturedImage = [photo1, photo2, photo3, photo4];
  const [CurrentIndex, setCurrentIndex] = useState(0);
  // nextButton
  const nextButton = (e) => {
    e.preventDefault();
    count = (CurrentIndex + 1) % FeaturedImage.length;
    setCurrentIndex(count);
    console.log(CurrentIndex);
  };
  // prevButton
  const prevButton = (e) => {
    e.preventDefault();
    const imageLength = FeaturedImage.length;
    count = (CurrentIndex + imageLength - 1) % imageLength;
    setCurrentIndex(count);
    console.log(CurrentIndex);
  };

  return (
    <>
      <div className="w-full select-none relative  py-[165px]  ">
        <img
          src={FeaturedImage[CurrentIndex]}
          alt="featuredImage"
          className="w-full md:h-[320px] sm:aspect-video object-cover"
        />
        <div className="absolute w-full top-[300px] flex justify-between items-center  px-3">
          <button onClick={prevButton} className="p-2">
            <BsFillArrowLeftCircleFill size={24} fill={"white"} />
          </button>
          <button onClick={nextButton} className="p-2">
            <BsFillArrowRightCircleFill size={24} fill="white" />
          </button>
        </div>
      </div>
    </>
  );
};
