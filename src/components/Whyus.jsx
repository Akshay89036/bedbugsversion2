import React from "react";
import Whyusbody from "./whyusbody/Whyusbody";
import { useEffect } from "react";

const Whyus = () => {
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  })
  return <Whyusbody />;
};

export default Whyus;
