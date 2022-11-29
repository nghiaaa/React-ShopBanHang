import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import slider1 from "../../assets/images/slider/slider1.svg";
import slider2 from "../../assets/images/slider/slider2.svg";
import slider3 from "../../assets/images/slider/slider3.svg";
import slider4 from "../../assets/images/slider/slider4.svg";
import slider5 from "../../assets/images/slider/slider5.svg";
import slider6 from "../../assets/images/slider/slider6.svg";
const SliderComponent = () => {
  const arrImages = [slider1, slider2, slider3, slider4, slider5, slider6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <>
            <Image
              src={image}
              alt="slider"
              preview={false}
              width="100%"
              height="274px"
            />
          </>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
