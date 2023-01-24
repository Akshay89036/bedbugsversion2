import React from "react";
import ContactUs from "./contact-us/ContactUs";
import Introduction from "./introduction/Introduction";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import { useEffect } from "react";



const MainPage = () => {
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  })
  return (
    
    <>
      <Introduction />
      <Testimonials/>
    
      
    </>
  );
};

export default MainPage;
