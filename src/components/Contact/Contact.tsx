import React from "react";
import "./Contact.scss";
import github from "../../static/images/github.png";
import linkedin from "../../static/images/linkedin.png";
import gmail from "../../static/images/gmail.png";

const Contact: React.FC<{}> = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-container__contact-me">
          <div>
            {`Contact Me `}
            <span
              role="img"
              aria-label="skills"
              style={{ fontStyle: "normal" }}
            >
              ☎️
            </span>
          </div>
          <div style={{ fontSize: "14px" }}>
            Let's connect. I prefer{" "}
            <a href="https://www.linkedin.com/in/ilaydacansinkoc">
              LinkedIn DM's
            </a>{" "}
            and <a href="mailto:ilaydacansin@gmail.com">Gmail</a> messages.
          </div>
        </div>
        <hr />
        <div className="contact-container__icons">
          <div className="contact-container__communicaion">
            <a href="mailto:ilaydacansin@gmail.com">
              <img alt="gmail" src={gmail} />
            </a>
          </div>
          <div className="contact-container__communicaion">
            <img
              alt="linkedin"
              src={linkedin}
              onClick={() =>
                window.open("https://www.linkedin.com/in/ilaydacansinkoc")
              }
            />
          </div>
          <div className="contact-container__communicaion">
            <img
              alt="github"
              src={github}
              onClick={() =>
                window.open("https://www.github.com/ilaydacansinkoc")
              }
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
