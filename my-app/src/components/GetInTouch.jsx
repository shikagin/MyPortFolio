import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import colorSharp from "../assets/img/color-sharp.png";

function GetInTouch() {
  return (
    <section className="GetInTouch" id="contact">
      <Container>
        <Row>
          <Col className="py-20">
            <img className="contactImg" src={contactImg} alt="" />
          </Col>
          <Col className="p-20">
            <h2 className="text-6xl font-extrabold py-2 px-4">Get In Touch</h2>

            <form action="" className="flex px-4 bg-transparent">
              <Row>
                <Col>
                  <input  type="text" placeholder="First Name" className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2" />
                </Col>
                <Col>
                  <input type="text" placeholder="Last Name" className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2" />
                </Col>
                <Col>
                  <input type="email" placeholder="Email" className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2" />
                </Col>
                <Col>
                  <input type="tel" placeholder="Phone NO." className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2" />
                </Col>
                <Col>
                    <textarea rows="6"  name="Message" placeholder="Message" className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg h-32 w-full pl-1 my-2 align-top resize-none  "></textarea>
                    <button type="submit" className="bg-gray-200 h-11 w-20 text-[#27323f] font-bold rounded-md " >Send</button>
                </Col>

              </Row>
            </form>
          </Col>
        </Row>
        <img className="absolute bottom-32 left-0 w-96 opacity-50 pointer-events-none" src={colorSharp} alt="Background" />
      </Container>
    </section>
  );
}
export default GetInTouch;
