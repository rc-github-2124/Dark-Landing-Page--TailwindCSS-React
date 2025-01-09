import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl bg-white w-full flex-row justify-center items-center">
        <div
          style={{ backgroundColor: "#0F0F0F" }}
          className="md:container- h-20 w-full  "
        >
          <div className="flex justify-center sm:justify-between items-center mt-5">
             <img style={{
                 filter:
    "brightness(0) saturate(100%) invert(97%) sepia(2%) saturate(40%) hue-rotate(94deg) brightness(124%) contrast(100%)"
             }}
              className=" w-[100px] h-[40px] sm:w-[200px] sm:h-[70px] ml-4"
              src={logo}
              ></img>
              <div className=" hidden sm:flex  justify-end gap-[20px] mr-2 ">
              <h3>Company</h3>
               <h3>Resources</h3>
               <h3>Services</h3>
               <h3>Contact</h3>
              </div>
              
               
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
