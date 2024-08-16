import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ganesh</span> from{" "}
            <span className="purple">Chennai, India.</span>
            <br />I am a Passionate front-end developer.
            <br />I have completed my Bachelor's degree in Computer Science and Engineering at Jaya Engineering College.
            <br />
            <br />
            Apart from coding, some of the other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Blockchain Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing and Enjoying my life
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Exploring New Adventures
            </li>
          </ul>

          <p className="purple">"Live the life what you have!" </p>
          <footer className="blockquote-footer">Ganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
