import React from "react";
import Rentalbody from "./rentalbody/Rentalbody";
import { useEffect } from "react";

const Rental = () => {
  
  useEffect(()=>{
    
    window.scrollTo({top:0,left:0})
    
  })


  return <Rentalbody />;
};

export default Rental;
