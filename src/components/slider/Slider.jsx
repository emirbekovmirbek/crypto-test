import React, {Component} from "react";
import Slider from "react-slick";
import './slider.scss'

export default function SimpleSlider({children}) {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <Slider {...settings}>
      {
        children
      }
    </Slider>
  )
}