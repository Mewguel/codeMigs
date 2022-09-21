import React from "react";
import ProfilePic from "../assets/vader.jpg"; // change this to your profile picture

const Avatar = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-800" id="about">
      <div className="container max-w-[1240px] max-auto grid md:grid-cols-3">
        <div className="flex md:justify-end justify-center md:pb-5 md:pr-10">
          <img
            className="h-[300px] w-[240px] rounded-lg"
            src={ProfilePic}
            alt="profile"
          />
        </div>

        <div>
          <div className="font-bold text-2xl p-2 text-white">
            <span className="text-vader">ABOUT</span> ME
          </div>
          <div className="font-base text-xl p-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quidem temporibus nisi tempora quae quo, ratione adipisci, quas
            impedit molestiae minima omnis deserunt odio cumque fugit debitis
            neque iusto laudantium!
          </div>
        </div>

        <div className="details-container font-semibold text-lg pt-14 pl-2 text-white">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            praesentium provident laborum necessitatibus nihil obcaecati tenetur
            eius excepturi labore temporibus?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
