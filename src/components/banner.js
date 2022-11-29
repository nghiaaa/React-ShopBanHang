import React from "react";
import banner from "../assets/images/slider/banner.png";
const Banner = () => {
  return (
    // <div>
    //   {/* <div className="Banner">
    //     <img src={banner} alt="" />
    //     <button> Shopping now </button>
    //   </div> */}

    // </div>
    <div>
      <video loop autoPlay muted playsInline >
        <source src="https://cdn.sanity.io/files/qa41whrn/prod/d177236afc280be2ac111506fcb71b68ef5a1d60.mp4" />
      </video>
    </div>
  );
};

export default Banner;
