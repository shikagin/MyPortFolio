import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else setScroll(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={`fixed w-full top-0 z-[9999] transition-all duration-300 ${
        scrolled ? "!bg-[#182935] py-0" : "py-[18px] !bg-[#0c151b] "
      }`}
    >
      <Container>

        <Navbar.Brand href="#home" className="w-[15%]">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">

            <Nav.Link
              href="#home"
              className={`${
                activeLink === "home" ? "opacity-100" : "opacity-75"
              }  text-white font-normal text-lg px-[5vw] tracking-[0.05em] hover:!opacity-100 transition-opacity duration-300`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={`${
                activeLink === "skills" ? "opacity-100" : "opacity-75"
              }  text-white font-normal text-lg px-[5vw] tracking-[0.05em] hover:!opacity-100 transition-opacity duration-300`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${
                activeLink === "projects" ? "opacity-100" : "opacity-75"
              } text-white font-normal text-lg px-[5vw] tracking-[0.05em] hover:!opacity-100 transition-opacity duration-300`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className=" navbar-text flex-row flex  items-center">

            <div className=" social-icon flex-row  relative flex ml-14">
              
              <a
                href=""
                className="  w-[2em] h-[2em] bg-[rgba(255,248,248,0.1)] rounded-[50%] content-center mr-6 items-center leading-none border border-white group-hover"
              >
                <img src={navIcon1} alt="" className=" w-[60%] h-[60%] ml-[20%] " />
              </a>
              <a
                href=""
                className="w-[2em] h-[2em]  bg-[rgba(217,217,217,0.1)] rounded-[50%] mr-6 content-center items-center leading-none border border-white group-hover"
              >
                <img src={navIcon2} alt="" className=" w-[60%] h-[60%] ml-[20%] "/>
              </a>
              <a
                href=""
                className=" w-[2em] h-[2em] bg-[rgba(217,217,217,0.1)] rounded-[50%] mr-6 content-center items-center leading-none border border-white group-hover"
              >
                <img src={navIcon3} alt="" className=" w-[60%] h-[60%] ml-[20%]" />
              </a>
            </div>

            <button
              className="font-bold text-white hover:!text-black border rounded-[7%] border-white px-[30px] py-[14px] text-[16px] ml-[18px] relative bg-transparent transition-all duration-300 ease-in-out"
              onClick={() => console.log("contact me")}
            >
              <span >Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
