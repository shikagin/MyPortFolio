import { useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import colorSharp from "../assets/img/color-sharp.png";
import emailjs from "@emailjs/browser";

function GetInTouch() {
  const form = useRef();

  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_sy1ar0h",
        "template_03co7ub",
        form.current,
        "xPd7KdvOLI71HGN_W"
      )
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);

        form.current.reset();
      });
  };
  const handleChange = () => {
    if (messageSent) {
      setMessageSent(false);
    }
  };

  return (
    <section className="GetInTouch" id="contact">
      <Container>
        <Row>
          <Col className="py-20">
            <img className="contactImg" src={contactImg} alt="" />
          </Col>
          <Col className="p-20">
            <h2 className="text-6xl font-extrabold py-2 px-4">Get In Touch</h2>

            <form
              ref={form}
              className="flex px-4 bg-transparent"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <input
                    name="first_name"
                    required
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2"
                  />
                </Col>
                <Col>
                  <input
                    name="last_name"
                    required
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2"
                  />
                </Col>
                <Col>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2"
                  />
                </Col>
                <Col>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Phone NO."
                    onChange={handleChange}
                    pattern="^(00213|\+213|0)(5|6|7)[0-9]{8}$"
                    className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg pl-1 py-2 my-2"
                  />
                </Col>
                <Col>
                  <textarea
                    required
                    rows="6"
                    name="message"
                    placeholder="Message"
                    onChange={handleChange}
                    className="bg-gray-400 bg-opacity-40 text-white placeholder-white text-opacity-100 border rounded-lg h-32 w-full pl-1 my-2 align-top resize-none  "
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-gray-200 h-11 w-20 text-[#27323f] font-bold rounded-md "
                  >
                    Send
                  </button>
                </Col>
              </Row>
              {messageSent === true ? (
                <div className="text-green-600 mt-4 ">
                  Your message was sent successfully!
                </div>
              ) : null}
            </form>
          </Col>
        </Row>
        <img
          className="absolute bottom-32 left-0 w-96 opacity-50 pointer-events-none"
          src={colorSharp}
          alt="Background"
        />
      </Container>
    </section>
  );
}
export default GetInTouch;
