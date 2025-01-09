import React from 'react';


const Hero = ()=>{
    return(
        <>
        <div className='container'>
            <div className='flex justify-center flex-row items-center text-center sm:text-left  '>
            <h3 className='w-[523px] font-[700] sm:text-[96px] text-[45px] leading-tight text-white' style={{
                  fontFamily: 'Roboto',
                  fontStyle: "normal",
            }}>Attract <br/> <span className='font-[700] text-[45px] sm:text-[96px] leading-tight  ' style={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                background:
                  "linear-gradient(217.81deg, #9DE8EE 25.05%, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
            }}> New Leads</span> like never before</h3>
            </div>
            <div className='flex w-[100%] items-center flex-row justify-center text-center sm:text-left'><span className='text-[13px] sm:text-[16px] w-[100%] sm:w-[523px]' >Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </span></div>
           
        </div>
        </>
    )
}

export default Hero