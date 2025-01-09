import React from "react";
import search from '../assets/search.png'

const Portfolio = ()=>{
    return(
        <>
        <div className=" h-[700px] md:h-[596px] w-screen mr-0">
            <div className="grid sm:grid-cols-2 grid-cols-1 mt-[350px] lg:mt-[0px]">
                <div className="flex items-center justify-center">
                    <img className="w-[100%] sm:w-[700px]" src={search}></img>
                </div>
                <div className="flex justify-center flex-col items-center sm:items-start gap-[16px]">
                    <h3 className="relative right-[0px] " style={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "40px",
                          lineHeight: "56px",
                          color: "#FFFFFF",
                          flex: "none",
                         
                    }}>Why Choose Us</h3>
                    <span className="text-[13px] sm:text-[16px] w-[80%] sm:w-[100%]" style={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "0.02em",
                          color: "rgba(255, 255, 255, 0.6)",
                          flex: "none",
                          textAlign:'left'
                    }}>Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. </span>
                    <button style={{
                          width: "151px",
                          height: "40px",
                          border: "1px solid #FFA800",
                          borderRadius: "1000px"
                    }}> <span className="mt-[30px]" style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "16px",
                        textTransform: "uppercase",
                        color: "#FFA800",
                    }}>LETS CONNECT</span></button>
                </div>
            </div>
        </div>

        </>
    )
}

export default Portfolio