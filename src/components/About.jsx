import React from "react";
import companies from '../assets/companies.png'
const About = () => {
  return (
    <>
    <div className="h-[700px] sm:h-[850px] flex flex-col justify-around  mt-[200px] " style={{
           background:
    "linear-gradient(26deg, rgb(12 20 61 / 79%) 0%, rgb(25 25 59 / 27%) 71%, rgb(112 28 210 / 14%) 100%)"
        }}>

   
      <div
        
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 "
      >
        <div>
            <div className="mt-[80px] text-center sm:text-left ml-0 sm:ml-[70px]">
                <span className="font-[400] text-[30px] sm:text-[40px]">Trusted by 200+ companies around the world</span>
            </div>
        </div>
        <div className="flex justify-center items-center flex-row w-[100%]">
            <div className="mt-[80px] sm:mr-[70px] text-center ">
                <span className="text-[#ffffff99]">Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orc</span>
            </div>
        </div>
      </div>
        <div className="h-[100px] w-full flex flex-row justify-center">
            <img style={{
              position:'relative',
              top:'-100px'
            }} 
        className="object-contain w-[100%] h-[164px] sm:w-[1300px] " src={companies}></img>
        </div>
      </div>
    </>
  );
};

export default About;
