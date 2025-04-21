import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <h1> Skills </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>

      <Carousel>
        <div className="item1">
          <img src="" alt="" />
        </div>

        <div className="item1">
          <img src="" alt="" />
        </div>

        <div className="item1">
          <img src="" alt="" />
        </div>

        <div className="item1">
          <img src="" alt="" />
        </div>
        
      </Carousel>
    </div>
  );
}

export default Skills;
