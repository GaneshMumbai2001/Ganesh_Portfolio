import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/le.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm Ganesh, a passionate front-end developer. With
              extensive experience in building scalable and innovative web
              applications. My journey in the tech world has been marked by
              continuous learning and a deep enthusiasm for coding and
              development.
              <br />
              <br />I am proficient in programming languages like
              <i>
                <b className="purple"> Python, JavaScript. </b>
              </i>
              <br />
              <br />
              My primary areas of interest include developing cutting-edge
              &nbsp;
              <i>
                <b className="purple">
                  Blockchain technologies, Web Applications.
                </b>
              </i>

              <br />
              <br />I thrive on leveraging technologies like{" "}
              <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript frameworks and libraries
                </b>
              </i>
              , such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              , to create impactful solutions.
            </p>
          </Col>
          <Col md={4} style={{ margin: "0px" }} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ height: "60vh", width: "30vh" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GaneshMumbai2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ganesh__mumbai?t=JwSmlCKf5RWpAcMI3IB3zA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ganesh-mumbai-b863a3203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ganeshmumbaiofficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
