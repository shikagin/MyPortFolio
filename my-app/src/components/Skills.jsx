import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Container from "react-bootstrap/Container";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Meter from "./Meter";

function Skills() {
  const [percentage, setPercentage] = useState(66);
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
    
    <section className="skills   ">
      <Container className=" rounded-[8%] text-center pt-[60px] pb-[50px] mt-[-90px] bg-gradient-to-t from-[#354557] via-[#1f2731] to-[#0d1014]">
        <h1 className="text-[45px] font-bold"> Skills </h1>
        <p className="text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] my-[14px] mb-[75px]">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>

        <Carousel responsive={responsive} infinite={true}>

          <div className="item">
              <Meter percentage={96} />
          </div>

          <div className="item">
            <Meter percentage={76} />
          </div>

          <div className="item">
            <Meter percentage={90} />
          </div>

          <div className="item">
            <Meter percentage={86} />
          </div>
        </Carousel>
      </Container>
      <img src={colorSharp} alt="" />
    </section>
  );
}

export default Skills;
