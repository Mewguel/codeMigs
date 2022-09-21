import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white" id="hero">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h6 className="text-vader md:text-4xl sm:text-3xl  text-2xl font-bold p-2">
          Hi!
        </h6>
        <h1 className="md:text-7xl sm:text-5xl  text-4xl font-bold">
          I'm Migs!
        </h1>
        <div className="md:text-4xl sm:text-3xl  text-2xl font-semibold p-2 text-gray-500">
          A Software Developer
        </div>
        <div className="flex justify-center items-center">
          <p className="md:text-xl sm:text-lg text-base font-semibold">
            Let's Build
          </p>
          <Typed
            className="md:text-xl sm:text-lg text-base font-semibold pl-2"
            strings={["Responsive", "Reactive", "Modern Websites!"]}
            typeSpeed={120}
            backSpeed={200}
            loop
          />
        </div>
        <button className="bg-vader w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-deepvader">
          See Profile
        </button>
      </div>
    </div>
  );
};

export default Hero;
