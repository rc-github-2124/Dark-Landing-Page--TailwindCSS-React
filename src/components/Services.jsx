import React from "react";
import imac from "../assets/imac.png";
const Services = () => {
  return (
    <>
      <div className="w-screen h-[700px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center md:text-left">
          <div className="flex flex-col ml-[12px] gap-10">
            <h3
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "56px",
                color: "#FFFFFF",
              }}
            >
              Some pieces of our work
            </h3>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: 200,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              consequat magna semper orci a tincidunt.{" "}
            </span>

            <button className="relative left-[119px] md:left-[1px]"
              style={{
                width: "131px",
                height: "40px",
                border: "1px solid #FFA800",
                borderRadius: "1000px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "16px",
                  textTransform: "uppercase",
                  color: "#FFA800",
                }}
              >
                Show More
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center gap-[20px] items-center ">
            <img
              className=" w-full relative left-[0px] sm:mt-[-19px] sm:left-[-19px] "
              src={imac}
            ></img>
            <button
              style={{
                width: "73px",
                height: "24px",
                background: "#FFA800",
                borderRadius: "4px",
              }}
            >
              {" "}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#1A365D",
                }}
              >
                Website{" "}
              </span>
            </button>
            <h3
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#FFFFFF",
              }}
            >
              Creating Landing Page
            </h3>
            <h5
              style={{
                fontStyle: "normal",
                fontWeight: 200,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.02em",
                color: "#728095",
              }}
            >
              Read More
            </h5>
            
          </div>

          <div>
            
            <div className="flex flex-col gap-[20px] items-center">
            <img
              className="w-full relative left-[0px] sm:mt-[-19px] sm:left-[-19px] "
              src={imac}
            ></img>
              <button
                style={{
                  width: "133px",
                  height: "24px",
                  background: "#FFA800",
                  borderRadius: "4px",
                }}
              >
                {" "}
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "#1A365D",
                  }}
                >
                  Digital marketing
                </span>
              </button>
              <h3
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FFFFFF",
                }}
              >
             Creative landing page
              </h3>
              <h5
                style={{
                  fontStyle: "normal",
                  fontWeight: 200,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#728095",
                }}
              >
                Read More
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
