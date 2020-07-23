import React from "react";
import "./AboutMe.scss";

const AboutMe: React.FC<{}> = () => {
  return (
    <div className="aboutme" id={"about-me"}>
      <div className="aboutme__content">
        <div className="aboutme__content__profile">
          <div className="aboutme__content__title">{`Profile`}</div>
          <div className="aboutme__content__small-title">{`I am Frontend Development Engineer & Enthusiast`}</div>
          <hr className="hr" />
        </div>
        <div className="aboutme__content__details">
          <div className="aboutme__content__details__subdetail-container">
            <div className="aboutme__content__title--medium">{`About Me`}</div>
            <div className="aboutme__content__details__subdetail">
              I’ve been highly regarded for my willingness to learn new skills,
              sharing those knowledge to my teammates to develop better, having
              decent relationship with my teammates, being planful to meet the
              deadlines and delivering the desired product at its bests in
              performance, UI/UX and etc.
            </div>
            <div className="aboutme__content__details__subdetail">
              I think that helping others to improve their work is really
              important and valuable thing apart from development. The knowledge
              that helped me to reach this stage is the other people’s sharings
              with me. So I value them a lot. I also try to share my notes on
              the Internet so the people would read them.
            </div>
          </div>
          <div className="aboutme__content__photo-container">
            <div className="aboutme__content__photo"></div>
          </div>

          <div className="aboutme__content__summary">
            <div className="aboutme__content__title--medium">{`Details`}</div>
            <div className="aboutme__content__small-container">
              <div className="aboutme__content__green-small-title">{`Name:`}</div>
              <div className="text">{`İlayda Cansın Koç`}</div>
            </div>
            <div className="aboutme__content__small-container">
              <div className="aboutme__content__green-small-title">{`Age:`}</div>
              <div className="text">{`24 years`}</div>
            </div>
            <div className="aboutme__content__small-container">
              <div className="aboutme__content__green-small-title">{`Location:`}</div>
              <div className="text">{`Izmir, Turkey`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
