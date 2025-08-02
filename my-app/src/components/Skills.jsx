import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import Container from "react-bootstrap/Container";
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
    
    <section className="skills  mt-0 " id="skills">

      <Container className=" rounded-[80px] text-center  py-16 mt-[-90px]   bg-gradient-to-t from-[#354557] via-[#1f2731] to-[#0d1014]">
        <h1 className="text-[40px] font-bold"> My Skills </h1>
        <p className="text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] my-[14px] mb-[75px]">
          Skills that power my projects
        </p>

        <Carousel  className=" flex gap-1" responsive={responsive} infinite={true}>

          <div className="item">
              <Meter percentage={90} text={'React'}/>
          </div>

          <div className="item">
            <Meter percentage={70} text={'C/C++'} />
          </div>

          <div className="item">
            <Meter percentage={30} text={'Django'}/>
          </div>

          <div className="item">
            <Meter percentage={80} text={'JS'} />
          </div>
          <div className="item">
            <Meter percentage={60} text={'Java'} />
          </div>
        </Carousel>
      </Container>

    </section>
  );
}

export default Skills;
