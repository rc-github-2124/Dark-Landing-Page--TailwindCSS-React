import React from "react";
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 mt-[300px] sm:mt-[0px] ">
        <div
          style={{
            background: "#FFB219",
            border: "1px solid #A1AEBF",
          }}
          className="w-full h-[364px]"
        >
            <div className="flex flex-col items-center justify-center h-[360px]">
            <h3 style={{
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "56px",
                  textAlign: "center",
                  color: "#0D0E14",
            }}>Lets discuss the idea</h3>
            <span style={{
               fontFamily: "'Roboto'",
               fontStyle: "normal",
               fontWeight: 400,
               fontSize: "16px",
               lineHeight: "24px",
               textAlign: "center",
               letterSpacing: "0.02em",
               color: "rgba(0, 0, 0, 0.6)",
            }}>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. </span>
            <div className="flex flex-row items-center w-full justify-center mt-[30px] gap-[16px]">
            <input className="p-4 sm:w-[320px] sm:h-[52px] h-[52px] w-full placeholder-[#0D0E14]" style={{
                  width: "320px",
                  height: "52px",
                  border: "2px solid #A1AEBF",
                  borderRadius: "30px",
                  background:'#A1AEBF',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#0D0E14",
             
            }} placeholder="Your Email"/>
            <button className="w-[84px] h-[40px]" style={{
                  background: "#000000",
                  borderRadius: "1000px",
            }}><span style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                textTransform: "uppercase",
                color: "#FFFFFF",
            }}>Send</span></button>

            </div>
            
            </div>
         
        </div>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-5">
        <div className="flex flex-col justify-center items-center mt-[80px] gap-[24px]">
          <h4 style={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
          }}>
          Company
          </h4>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>About us</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Team</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Careers</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-[80px] gap-[24px]">
          <h4 style={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
          }}>
          Services
          </h4>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Branding</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Web development</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Digital marketing</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Mobile app</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>SEO</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>User testing</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-[80px] gap-[24px]">
          <h4 style={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
          }}>
          Resources
          </h4>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Blog</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Case study</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Testimonials</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-[80px] gap-[24px]">
          <h4 style={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "#FFFFFF",
          }}>
         Follow us
          </h4>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Instagram</span>
          <span style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.02em",
              color: "rgba(255, 255, 255, 0.6)",
          }}>Figma</span>
          
        </div>
        <div className="flex flex-col justify-center items-center mt-[80px] gap-[10px]">
<img style={{
  filter:
    "brightness(0) saturate(100%) invert(97%) sepia(2%) saturate(40%) hue-rotate(94deg) brightness(124%) contrast(100%)"
}} src={logo}></img>
<span style={{
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    color: "rgba(255, 255, 255, 0.6)",
}}>Get Latest Update</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
