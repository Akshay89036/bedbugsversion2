import React from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import './introduction.css';
import one from './imhome1.png'
import two from './2.jpeg'
import three from './imhome2.png'
import four from './4.jpeg'
import five from './imhome3.png'
import six from './6.jpeg'
import seven from './7.png'
import eight from './8.png'


const Introduction = () => {
  return (

    <>

      <div className="container mainconatiner">
        <div className="row">
          <div className="col-md-8  " id="div1">
            {/* Our Pest Control Services
We permanently remove pests so you can love your space again */}
            <div className="formheading" style={{ padding: '0px 8%', color: '#black', backgroundColor: '#A8BD40' }}>Bedbugs Extermination and Control in Greater Toronto Area
            </div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="8000">
                  <img src={seven} class="d-block w-100" style={{ paddingLeft: '20%' }} alt="..." />
                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                  <img src={two} class="d-block w-100" style={{ paddingLeft: '20%' }} alt="..." />
                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                  <img src={six} class="d-block w-100" style={{ paddingLeft: '20%' }} alt="..." />
                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                  <img src={four} class="d-block w-100" style={{ paddingLeft: '20%' }} alt="..." />
                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>



              <div className="container servicesgap left">
                {/* <div className="ser ">
                  <div className="sa">Bed Bug Extremination</div>
                  <div className="sa">Bed bug Inspection</div>
                  <div className="sa">Equipments Rental</div>
    </div>



  Our bed bug treatment services in Toronto, Scarborough,Markham, North York, & GTA, help you get back to a bed-bug-free home. The bed bug inspection is the first step to finding evidence of bed bugs infesting in your home. If evidence is found, the next steps are taken based on the bed bug infestation level. Finally, following up all pest control services ensures peace of mind and measures the success of the extermination.
  we also provides rental services of the equipments used for Extremination. */}

                <div className="card-body ri">
                  ByebyeBedbugs provides the most effective  
                  <span className=" cold ric"> heating bedbug extermination </span> and gets the job done right the first time. We provide environmentally responsible solution that is <span className=" cold ric">100% human and pet friendly</span>  and the safest bedbug eradication method that exists today.


                  
                  <br />
                  &nbsp;

                  <h5 className="cold ri">Why you want to choose us:</h5>
                  <ul className="editt" >
                    <li><span className="cold ric">6-MONTHS WARRANTY</span> <span className="ri">for complete peace of mind.</span> </li>
                    <li> <span className="cold ric">FREE HOME INSPECTION</span> <span className="ri">to identify the problem.</span></li>
                    <li><span className="cold ric" >ECO-FRIENDLY TECHNOLOGY</span> <span className="ri">avoiding unnecessary pesticides.</span></li>
                    <li><span className="cold ric">SAME-DAY INSPECTION AND EXTERMINATION</span> <span className="ri">as quickly as possible.</span></li>
                    <li><span className="cold ric">EASY PREPARATION</span> <span className="ri">almost no preparation is required by tenants.</span></li>
                    <li><span className="cold ric">BACK TO HOME BY EVENING</span> <span className="ri">no waiting period is required after the heat treatment.</span></li>



                  </ul>
                
                         
                          




                </div>
              </div>
            </div>




<div className="container">


  
</div>
            {/* <div className="cardwrapper">
              
              <div className="servcard">
                <div class="card-body p-4" style={{ height: "17em" }}>
                  <img
                    src={two}
                    alt=""
                    class="img-fluid d-block mx-auto mb-3 " style={{ height: "10em" }}
                  /><h5>Bed Bug Extremination</h5>
                </div>
              </div>



              <div className="servcard"><div class="card-body p-4" style={{ height: "17em" }}>
                <img
                  src={three}
                  alt=""
                  class="img-fluid d-block mx-auto mb-3 " style={{ height: "10em" }}
                /><h5>Bed bug Inspection</h5>
              </div>
              </div>




              <div className="servcard"><div class="card-body p-4" style={{ height: "17em" }}>
                <img
                  src={four}
                  alt=""
                  class="img-fluid d-block mx-auto mb-3 " style={{ height: "10em" }}
                /><h5>Equipments Rental</h5>
              </div>
              </div>
            </div> */}

          </div>
          <div className="col-md-4 " id="div2">
            <form action="https://formsubmit.co/bf040744cada83efa9f18be2ca084e08"
              method="POST"
              id="contactForm"
              name="contactForm"
              className="brform formwrap form-control contactForm">
              <div className="formheadingdiv"><h2 className="formheading " style={{ padding: '0% 0% 0% 10%' ,fontSize: '50px'}}>Contact Us</h2></div>
              <input type="text" className="forminput" name="name"
                id="name" placeholder="Full Name" required />
              <input type="text" className="forminput" name="email"
                id="email" placeholder="Email Address" required />
              <input type="number" className="forminput" name="number"
                id="number" placeholder="Phone Number" />

              <AddressAutofill accessToken="pk.eyJ1IjoiYWtzaGF5ODkwMzYiLCJhIjoiY2xjcWVjYWg5MDUyZDNxbWY1NWsxNmlveiJ9.9xgOEBB4VU2QD5aVRegXEw"> <input type="text" className="address forminput"
                autoComplete="address-line1" placeholder="Address" /></AddressAutofill>
              <input type="text" className="apartment forminput" autoComplete="address-line2 " placeholder="Apt,Suite,etc" />
              <input type="text" className="city forminput" placeholder="City" autoComplete="address-level2" />
              <input type="text" className="state forminput" autoComplete="address-level1" placeholder="State/Province" />
              <input type="text" className="postcode forminput" autoComplete="postal-code" placeholder="Zip/Postal code" />
              <input type="text" className="country forminput" autoComplete="country" placeholder="Country" />
              <textarea name="message" className="forminput" id="message" rows="4" placeholder="Please provide the details to your questions & concerns and we'll get back to you as soon as possible" minLength={10} required></textarea>
              <button className="forminput formbutton">Send Request</button>
            </form>

          </div>

        </div>
      </div>

      <div className="container style={{ paddingLeft: '10%' }}"> <div className="cold" >
                               How the heat extermination works.
                              <div className="container ri">
                                Bedbugs and bedbug eggs are killed over 125°F (52°C), “kill zone”. Our equipment produces 145°F or higher using forced convection technology which reaches at “kill zone” heat quickly and uniformly pumped through the treatment area. ALL bedbugs and bedbug eggs are killed in a matter of seconds and our heat treatment reaches everywhere including wall voids ​and areas insulated by clothing or carpeting effectively.
                               </div>
                          </div>
                          <br />
                 
                          <div className="cold" >
                          Why we use heat treatment.
                              <div className="container ri">
                              It is not only eco-friendly. Bedbugs have built up a tolerance for pesticides, and they are becoming resistant to chemical treatments. Therefore, higher amounts of harmful chemicals are required to kill bedbugs. Our heat treatment eradicates bedbug infestations with a chemical-free method and 100% human and pet friendly. It is safe for you, your family as well as our operator.
                               </div>
                          </div>
                          <br />
                          <div className="cold" >
                          Remote Tracking System
                              <div className="container ri">
                              We will make sure all target area reaches kill zone temperature by wireless temperature sensing and data logging system. Our operator remotely tracks the temperatures of different locations in the target area.
                               </div>
                          </div>
                          <br />
                          <div className="cold" >
                          How to identify bedbugs
                              <div className="container ri">
                              
                              <span className=" cold ric"> Contact us! We provide free inspection.</span> 
                              <br />

You can also use a bright ﬂashlight to look for bedbugs or their dark droppings.
                               </div>
                               <br />
                               What to look for:
<div className="container  ri" style={{ paddingLeft: '10%' }}>
                               
                               <li> Bedbug bites on your skin   <img src={five} class="d-block w-100 stim" style={{ paddingLeft: '10%' }} alt="..." /></li> <br />
                               <li>Reddish or rusty stains on bed sheets or mattresses caused by bed bugs being crushed<img src={one} class="d-block w-100 stim" style={{ paddingLeft: '10%'}} alt="..." /></li> <br />
                               <li>Dark spots (about this size: •), which are bed bug excrement and may bleed on the fabric like a marker would
                                        Eggs and eggshells (about 1mm) and pale-yellow skins</li> <br />
                              <li>Live bed bugs (About 10mm for adult and 1.5mm for young)<img src={three} class="d-block w-100 stim" style={{ paddingLeft: '10%' }} alt="..." /> </li> <br />
                              </div>
                          </div>

                          <div className="container cold">
                          Check these places:
<span className='ri' style={{ paddingLeft: '10%' }} >
                          <li>Under wallpaper</li>
                          <li>Behind picture frames</li>
                          <li>In electrical outlets and around nightstands</li>
                          <li>Inside box springs and mattress pads</li>
                          <li>Behind bed boards and around cracks of beds</li>
                          <li>In night tables</li>

                          </span>
                          </div>
</div>

    </>
  )
};

export default Introduction;


//   <div id="about" className="about">
//   <div className="container-fluid">
//     <div className="row flexcss">
//       <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
//         <div className="about-box">
//           <h3>We help you to KILL BedBugs </h3>
//           <h4>
//             Are you losing the war on bed bugs? Have you been using sprays
//             and powder and you are still getting bites?
//           </h4>
//           <p>
//             Bed Bugs have become immune to the pesticide used by
//             professional exterminators developed in the 1970s. Science has
//             proven that heat treatment is the most effective method of
//             killing all stages of bed bugs and eggs within minutes after
//             reaching the thermal death temperature of 45C. Our electric
//             bug removal method uses electric heaters and is safe for
//             everyone: your children, asthma sufferers, the elderly and
//             your pets. Stay at home. There is no need to leave your house
//             during the treatment as we heat one room at a time.
//           </p>
//         </div>
//       </div>
//       <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
//         <div className="about-img">
//           <figure>
//             <img src={one} alt="img"/>
//           </figure>
//         </div>
//       </div>
//     </div>
//     <a  href="#contacta" className="quote_button boxforquote" id="contact_us">Get Quote</a>
//   </div>
// </div>
    // <section class="slider_section">
    //   <div
    //     id="myCarousel"
    //     class="carousel slide banner-main"
    //     data-ride="carousel"
    //   >
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img
    //           class="first-slide"
    //           src={"https://www.thesaurus.com/e/wp-content/uploads/2022/06/20220610_familyCap_1000x562.jpg"}
    //           alt="First slide"
    //         />
    //         <div class="container">
    //           <div class="carousel-caption relative">
    //             <h3 className="banner_h3">We help you to KILL BedBugs </h3>
    //             <h4 className="banner_h4">
    //               Are you losing the war on bed bugs? Have you been using sprays
    //               and powder and you are still getting bites?
    //             </h4>
    //             <p className="banner_p">
    //               Bed Bugs have become immune to the pesticide used by
    //               professional exterminators developed in the 1970s. Science has
    //               proven that heat treatment is the most effective method of
    //               killing all stages of a bed bugs and eggs within minutes after
    //               reaching the thermal death temperature of 45C. Our electric
    //               bug removal method uses electric heaters and is safe for
    //               everyone: your children, asthma sufferers, the elderly and
    //               your pets. Stay at home. There is no need to leave your house
    //               during the treatment as you heat one room at a time.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>