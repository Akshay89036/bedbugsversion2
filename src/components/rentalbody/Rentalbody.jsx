import React, { useState } from "react";
import "./Rentalbody.css";
import Rentalbodycard from "../card/Rentalbodycard";
import rbedbug from "./rbedbug.png";
import home from "./rbedbug.png";
import buster from "./buster.png";
import air from "./air.png";
import powerchord from "./powerchord.png";
import fen from "./fen.png";
import heater from "./heater.png";
import mover from "./mover.png";
import monitor from "./monitor.png";
import power from "./power.png";
import splitter from "./splitter.png";
import cord from "./cord.png";
import { useEffect } from "react";


const Rentals = () => {

  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  })
  const [rentals] = useState([
    {
      id: 1,
      name: "Residential Bedbug heat system",
      
      image: rbedbug,
      des: "Coverage area: 200 Sqft",
    },
    {
      id: 2,
      name: "HOME BED BUG HEAT PACKAGE",
     
      image: home,
      des: "Coverage area: 650 Sqft",
    },
    {
      id: 3,
      name: "Bedbug Buster Pro heater ",
      
      image: buster,
      des: "Coverage area: 400 Sqft",
    },
    {
      id: 4,
      name: "AIR MOVER",
     
      image: air,
      des: "High temperature, high speed, lightweight, axial fan. Only draws 1.93 amps!",
    },
    {
      id: 5,
      name: "Bedbug heater block and powerchord package ",
     
      image: powerchord,
      des: "This is the most affordable Bed Bug Heater on the Market today! Treat up to 200sq feet fast with 14 Thousand BTU's",
    },
    {
      id: 6,
      name: "UNIVERSAL FAN HEATER",
      
      image: fen,
      des: "Coverage Area Up to 100 sq ft",
    },
    {
      id: 7,
      name: "ELIITE 8 BED BUG HEATER",
      
      image: heater,
      des: "This state of the art, 110 Volt Hotel Bed Bug Heater and Fan Combo treats 500sqft with the proper number of additional fans. This heater is perfect for hospitality industry applications with 20 amp / 120 volt breakers.",
    },
    {
      id: 8,
      name: "Air mover",
     
      image: mover,
      des: "High temperature axial fan",
    },
    {
      id: 9,
      name: "REMOTE CELLULAR BED BUG HEAT TEMPERATURE MONITORING SYSTEM",
      
      image: monitor,
      des: "Monitor your Bed Bug Heat treatments remotely 24/7 via a cellular gateway. ",
    },
    {
      id: 10,
      name: "POWER DISTRIBUTION AND STEP DOWN KIT",
      
      image: power,
      des: "Full 240 to 120 Volt Conversion Step down bundle with a 48amp / 120volt output. Includes Temporary Power Box, 3 Wire Dryer Cords (New & Old Style), 3 Wire Range Cords (New & Old Style), and bag.",
    },
    {
      id: 11,
      name: "SPLITTER - 4 WAY A/C PTAC POWER ADAPTER",
      
      image: splitter,
      des: "Designed specifically for in wall 20Amp Hotel Air PTAC Conditioner outlets. For use with the Elite 8 and Elite 33K Hypro Heaters.",
    },
    {
      id: 12,
      name: "LIGHTED POWER CORD - 25FT",
      
      image: cord,
      des: "12 Gauge Heavy Duty Lighted End 25' Length ",
    },
  ]);

  return (
    <><div className="coming" >Coming Soon...</div>
    <section class="py-5 ">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {rentals.map((rental) => (
            <Rentalbodycard key={rental.id} rental={rental} />
          ))}
        </div>
        <div className="container">
          <div className="pick">
            {/* {" "}
            Pick Up Location: 69 Woodword Avenue ,Thornhill <br />
            Call to schedule your pickup time
            <br />
            Richard 6473346669 */}
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Rentals;
