import { Row, Col, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
function Footer() {
  return (
    <section className="moreInfo bg-black ">
      <Container>
        <Row>
          <Col className="">
            <img src={logo} alt="" className="w-40 top-12 " />
            <a
              href="mailto:rafikahouda2005@gmail.com"
              className="text-sm text-gray-400 "
            >
              rafikahouda2005@gmail.com
            </a>
          </Col>
          <Col>
            <div className=" social-icon flex-row top-5 left-96 relative flex ml-14 align-bottom">
              <a
                href="https://www.linkedin.com/in/mekircha-rafikahouda-b47882276"
                target="_blank"
                className="  w-[2em] h-[2em] bg-[rgba(255,248,248,0.1)] rounded-[50%] content-center mr-1 items-center leading-none border border-white group-hover"
              >
                <img
                  src={navIcon1}
                  alt=""
                  className=" w-[60%] h-[60%] ml-[20%] "
                />
              </a>
              <a
                href="https://github.com/shikagin"
                target="_blank"
                className="w-[2em] h-[2em]  bg-[rgba(217,217,217,0.1)] rounded-[50%] mr-1 content-center items-center leading-none border border-white group-hover"
              >
                <img
                  src={navIcon2}
                  alt=""
                  className=" w-[60%] h-[60%] ml-[20%] "
                />
              </a>
              <a
                href="https://www.instagram.com/rafika_houda/"
                target="_blank"
                className=" w-[2em] h-[2em] bg-[rgba(217,217,217,0.1)] rounded-[50%] mr-1 content-center items-center leading-none border border-white group-hover"
              >
                <img
                  src={navIcon3}
                  alt=""
                  className=" w-[60%] h-[60%] ml-[20%]"
                />
              </a>
               
            </div>
           
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
