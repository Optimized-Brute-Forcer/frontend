import React  from "react";
import job from "../images/job.png";
import { Link } from "react-router-dom";
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
 

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          <span style={{ fontSize:"70px",color:"black" }}>SkillBridge</span> <br /> Unlock Your <br/>  Digital Potential
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Fuel Your Education , Fuel Your Dreams , Find Internships that Fuel Your Passion and Provide Financial Support.
          </p>
          <div class="flex">
          <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
              <p className="text-white text-base font-semibold">
              <Link to="/employee/feed">
                Get Started
              </Link>
              </p>
            </button>
            <button
              type="button"
              className="flex flex-col justify-center items-center my-5  p-3 rounded-full cursor-pointer hover:scale-110 "
          >
              <p className="text-white text-base font-semibold">
                <Link to="/employer/dashboard">
                  Hire Talent
                </Link>
              </p>
          </button>
          </div>

        </div>
 
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <img src={job} alt="logo"  style={{ width: '30px' }} />
                  </div>
                  <span  style={{  color:"white"}}>
                  SkillBridge
                  </span>
                </div>
              <div>
                <p className="text-white font-light text-sm">
                  Full Stack Developer
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Hemraj Kumar 
                </p>
            </div>
          </div>     
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Connect
              </div>
            <div className={companyCommonStyles}>
            Transform
              </div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Discover
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            Amplify
            </div>
            <div className={companyCommonStyles}>
            Innovate
            </div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            Empact
            </div>
          </div>
        {/* <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"> 
           
           <Input placeholder="Address To" name="addressTo" type="text"  handleChange={handleChange} />
          <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
          <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
          <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} /> 

           <div className="h-[1px] w-full bg-gray-400 my-2" />

          
            <button
                  type="button"
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                  Send now
                </button> 
           </div> */}
        </div>
      </div>
    </div>
  
  );
}

export default Welcome;