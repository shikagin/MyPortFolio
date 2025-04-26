import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headderImg from "../assets/img/undraw_dev-focus_dd7i.svg";
import { useState, useEffect } from "react";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Develloper", "web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner top-0 text-white">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className=" border border-white  rounded-2 p-2 bg-custom-gradient " > Welcome To My Portfolio </span>
            <h1 className="ml-[-2%]  mt-[1%] p-[2%]">Hi! I am Shikagin </h1> <h3 className="h-[1em]">{text} </h3>
            <p className=" ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="connect">
              <button
                className="   font-bold text-white hover:!text-black border rounded-[7%] border-white px-[30px] py-[14px] text-[16px]  relative bg-transparent transition-all duration-300 ease-in-out"
                onClick={() => console.log("contact me")}
              >
                <span className="flex flex-row gap-2">
                  Let's Connect <ArrowRightCircle size={25} />{" "}
                </span>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="mt-2">
            <img src={headderImg} alt="headderImage" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
