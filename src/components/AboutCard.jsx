import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Olawale Yakubu </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            <br />
            I am a passionate <span className="purple">Full Stack Developer </span>
            with a strong interest in building web applications and exploring innovative technologies.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Videography
            </li>
            <li className="about-activity">
              <ImPointRight /> condensed matter physics
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Bridging Science, Code, and Creativity"{" "}
          </p>
          <footer className="blockquote-footer">Olawale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;