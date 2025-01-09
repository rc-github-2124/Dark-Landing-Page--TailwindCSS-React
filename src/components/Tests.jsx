import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Tests = () => {
  return (
    <>
      <div className=" w-[100%] h-[700px] mt-8">
        <div className="flex flex-col justify-center items-center mt-[80px] gap-[24px]">
          <span
            style={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "40px",
              lineHeight: "56px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            We Offer
          </span>
          <span
            className="w-[100%] sm:w-[534px]"
            style={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              letterSpacing: "0.02em",
              color: "rgba(231, 231, 231, 0.6)",
            }}
          >
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.{" "}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] mt-[100px]">
          <div className="flex flex-col gap-[12px] justify-center items-center">
            <div
              style={{
                borderRadius: "16px",
                boxShadow: "rgb(20 34 182 / 30%) 1px 1px 5px 5px",
                backdropFilter: "blur(0px)"
              }}
              className="w-[338px] h-[208px]"
            >
                <div className="ml-[20px] mt-[20px] flex flex-col gap-2 justify-start items-start">

            
              <AiFillApple
                style={{
                  height: "46px",
                  width: "46px",
                }}
              />
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: "36px",
                  color: "#FFFFFF",
                }}
              >
                Branding
              </span>
              <br />
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "rgba(255, 255, 255, 0.6)",
                  width:'100%',
            
              
                }}
              >
                Egestas tellus nunc proin amet tellus tincidunt <br/> lacus consequat.
                Ultrices
              </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]  justify-center items-center">
            <div
              style={{
                borderRadius: "16px",
                boxShadow: "rgb(20 34 182 / 30%) 1px 1px 5px 5px",
                backdropFilter: "blur(0px)"
              }}
              className="w-[338px] h-[208px]"
            >
                <div className="ml-[20px] mt-[20px] flex flex-col gap-2 justify-start items-start ">

            
              <FaFacebook
                style={{
                  height: "46px",
                  width: "46px",
                }}
              />
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: "36px",
                  color: "#FFFFFF",
                }}
              >
                Web development
              </span>
              <br />
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "rgba(255, 255, 255, 0.6)",
                  width:'100%',
            
              
                }}
              >
               Integer ante non nunc, eget est justo vel semper nunc. Lacus
              </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]  justify-center items-center">
            <div
              style={{
                borderRadius: "16px",
                boxShadow: "rgb(20 34 182 / 30%) 1px 1px 5px 5px",
                backdropFilter: "blur(0px)"
              }}
              className="w-[338px] h-[208px]"
            >
                <div className="ml-[20px] mt-[20px] flex flex-col gap-2 justify-start items-start">

            
              <FaTwitter
                style={{
                  height: "46px",
                  width: "46px",
                }}
              />
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: "36px",
                  color: "#FFFFFF",
                }}
              >
               Digital marketing
              </span>
              <br />
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "rgba(255, 255, 255, 0.6)",
                  width:'100%',
            
              
                }}
              >
               
                UltricesSed faucibus faucibus egestas volutpat, accumsan 
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tests;
