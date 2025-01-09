import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tests from "./components/Tests";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
const App = ()=>{

  return(
    <>
       <Navbar/>
       
       <Hero/>
       <About/>
       <Tests/>
       <Portfolio/>
       <Services/>
       <Footer/>
    </>
  )
}

 export default App;