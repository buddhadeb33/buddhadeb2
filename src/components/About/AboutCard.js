import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Buddhadeb Mondal </span>
            from <span className="purple"> West Bengal, India.</span>
            currently living in <span className="purple">  Bangalore, India.</span>
            <br />I am a Senior Software Engineer working in L&T Technology Services.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling Remote Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “The most common way people give up their power is by thinking they don't have any.”{" "}
          </p>
          <footer className="blockquote-footer">— Alice Walker.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
