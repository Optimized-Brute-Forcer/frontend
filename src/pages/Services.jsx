import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Monetize your skills, shape your destiny.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Stipend-Based Internships"
          icon={<BsCashCoin fontSize={21} className="text-white" />}
          subtitle="Providing internships that offer stipends and compensation to support students' financial needs."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Freelance Guidance"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Offering guidance on our  freelancing platforms, helping students explore and leverage their digital talents to generate income."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Skill Matching"
          icon={<GiSkills fontSize={21} className="text-white" />}
          subtitle=" Matching students' digital talents and skills to ensure a good fit and maximize their potential."
        />
      </div>
    </div>
  </div>
);

export default Services;