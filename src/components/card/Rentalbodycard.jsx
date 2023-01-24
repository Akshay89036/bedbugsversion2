import React from "react";

const Rentalbodycard = ({rental})=>{

    return(<>
  
    <div class="col mb-5 ">
       
    <div class="card h-100 opa  ">
        {/* <!-- Product image--> */}
        <a href="#"><img class="card-img-top" style={{width:"100%",height:"14em"} }src={rental.image} alt="..." /></a>
        {/* <!-- Product details--> */}
        <div class="card-body p-4">
            <div class="text-center">
                {/* <!-- Product name--> */}
                <h5 class="fw-bolder">{rental.name}</h5>
                {/* <!-- Product reviews--> */}
                <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill">
                    {/* <i class="fa fa-star text-success"></i> */}
                    </div>
                    {/* <div class="bi-star-fill"> <i class="fa fa-star text-success"></i></div>
                    <div class="bi-star-fill"> <i class="fa fa-star text-success"></i></div>
                    <div class="bi-star-fill"> <i class="fa fa-star text-success"></i></div>
                    <div class="bi-star-fill"> <i class="fa fa-star text-success"></i></div> */}
                </div>
                {/* <!-- Product price--> */}
               <h5>{rental.price}</h5> 
               <h5>{rental.des}</h5>
            </div>
        </div>
        {/* <!-- Product actions--> */}
        {/* <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div> */}
    </div>
</div>
</>
    );
};

export default Rentalbodycard;