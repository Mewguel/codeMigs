import React from "react";
import ServiceCard from "./ServiceCard";
import { FaHtml5, FaPhotoVideo } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import { SiNumpy } from "react-icons/si";

const Services = () => {
  return (
    <div
      className="w-full md:h-screen mx-auto flex flex-col justify-center mt-[20px] bg-[#000300]"
      id="services"
    >
      <div className="flex justify-center font-bold text-white text-3xl pl-5 mb-5">
        Services
      </div>
      <div className="service-card-container w-full grid md:grid-cols-2 gap-4 justify-center items-center p-5">
        <div className="flex justify-end">
          <ServiceCard
            icon={<FaHtml5 className="text-white" size={40} />}
            title={"Web Design"}
            desc={
              "Plan, Create, and Code Websites suitable for your business or personal use."
            }
            cardColor={"bg-vader"}
          />
        </div>

        <ServiceCard
          icon={<AiFillCustomerService className="text-white" size={40} />}
          title={"Virtual Assistance"}
          desc={"Provide Administrative Services for clients."}
          cardColor={"bg-gray-800"}
        />
        <div className="flex justify-end">
          <ServiceCard
            icon={<SiNumpy className="text-white" size={40} />}
            title={"Data Science"}
            desc={
              "Gather and Analyze data to uncover insights to serve as a guide in decision making"
            }
            cardColor={"bg-gray-800"}
          />
        </div>

        <ServiceCard
          icon={<FaPhotoVideo className="text-white" size={40} />}
          title={"Graphic Design"}
          desc={
            "Produce Infographics and Publicity Materials to increase engagement for your site and social media platforms."
          }
          cardColor={"bg-vader"}
        />
      </div>
    </div>
  );
};

export default Services;
