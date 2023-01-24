import React from "react";
import Aboutusbody from "./aboutusbody/Aboutusbody";
import { useEffect } from "react";


const Aboutus = () => {
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  })
  return <Aboutusbody />;
};

export default Aboutus;
