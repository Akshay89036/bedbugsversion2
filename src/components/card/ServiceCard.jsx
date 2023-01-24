import React from "react";
import "./card.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb " >
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-4" style={{height:"30em"}}>
          <img
            src={service.image}
            alt=""
            class="img-fluid d-block mx-auto mb-3 "style={{height:"18em"}}
          />
          <h5>
            {" "}
            <a href="#" class="text-dark">
              {service.title}
            </a>
          </h5>
          <p class="small text-muted font-italic">
            {service.des}
          </p>
          {/* <ul class="list-inline small">
            <li class="list-inline-item m-0">
              <i class="fa fa-star text-success"></i>
            </li>
            <li class="list-inline-item m-0">
              <i class="fa fa-star text-success"></i>
            </li>
            <li class="list-inline-item m-0">
              <i class="fa fa-star text-success"></i>
            </li>
            <li class="list-inline-item m-0">
              <i class="fa fa-star text-success"></i>
            </li>
            <li class="list-inline-item m-0">
              <i class="fa fa-star text-success"></i>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
