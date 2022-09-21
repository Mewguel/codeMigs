import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare, FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full md:h-screen mx-auto text-center flex flex-col justify-center">
      <div className="text-white font-bold text-5xl">Let's get in touch!</div>

      <div className="flex justify-center">
        <a href="https://www.facebook.com/migs.ivan18">
          <div className="gmail-container flex flex-col justify-center p-14">
            <div className="text-white font-bold flex flex-col justify-center items-center">
              <FaFacebookSquare size={40} />
              <p>FaceBook</p>
            </div>
          </div>
        </a>

        <div className="gmail-container flex flex-col justify-center p-14">
          <div className="text-white font-bold flex flex-col justify-center items-center">
            <FaLinkedin size={40} />
            <p>LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="gmail-container flex flex-col justify-center p-5">
          <div className="text-white font-bold flex flex-col justify-center items-center">
            <AiOutlineMail size={40} />
            <p>Gmail</p>
            <p>meguelvan@gmail.com</p>
          </div>
        </div>

        <div className="gmail-container flex flex-col justify-center p-5">
          <div className="text-white font-bold flex flex-col justify-center items-center">
            <FaPhoneSquareAlt size={40} />
            <p>Phone</p>
            <p>+639 77 043 8627</p>
          </div>
        </div>
      </div>

      <button className="bg-vader w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-deepvader">
        See Profile
      </button>
    </div>
  );
};

export default Contact;
