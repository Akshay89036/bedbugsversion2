import React from "react";
import "./contact.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  })
  return (
    <>
      <div className="container col-md-12 cees">
        <div className="col-md-4 " id="div2">

          <form action="https://formsubmit.co/bf040744cada83efa9f18be2ca084e08"
            method="POST"
            id="contactForm"
            name="contactForm"
            className="brform formwrap contactForm">
            <div className="formheadingdiv"><span className="get">GET A FREE ESTIMATE </span><h2 className="formheading"> </h2></div>
            <input type="text" className="forminput" placeholder="Full Name" name="name"
              id="name" required />
            <input type="text" className="forminput" placeholder="Email Address" required />
            <input type="text" className="forminput" placeholder="Phone Number" />
            <input type="text" className="forminput" placeholder="Address" />
            <input type="text" className="forminput" placeholder="Apt,Suite,etc" />
            <input type="text" className="forminput" placeholder="City" />
            <div className="state"> <input type="text" className="forminput" placeholder="State/Province" />
              <input type="text" className="forminput" placeholder="Zip/Postal code" /></div>
            <input type="text" className="forminput" placeholder="Country" />


            <textarea rows="4" className="forminput" form="usrform" placeholder="Please provide the details to your questions & concerns and we'll get back to you as soon as possible " required></textarea>
            <button className="forminput formbutton">Send Request</button>
          </form>

        </div></div>
    </>
  );
};

export default ContactUs;
{/* <div id="service" className="service">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="titlepage">
        <h2 id="contacta">Contact Us</h2>
        <span>Message us to get a qoute</span>
      </div>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="wrapper">
        <div className="row no-gutters mb-5">
          <div className="col-md-7">
            <div className="contact-wrap w-100 p-md-5 p-4">
              <form
                action="https://formsubmit.co/bf040744cada83efa9f18be2ca084e08"
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Compname"
                        id="Compname"
                        placeholder="Company name"
                      required/>
                      
                </div>
                    
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label">Contact No.</label>
                      <input
                        type="number"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="contact number" country="US"
                      required/>
                      
                </div>
                    
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label">Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                      required></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary"
                      />
                      <div className="submitting"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-stretch">
            <div id="map">
              <div>
                <iframe
                  width="100%"
                  height="580"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3225%20lawrence%20avenue%20east,lower%20level+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    distance maps
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}