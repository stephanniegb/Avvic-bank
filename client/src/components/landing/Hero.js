import React from "react";
import "animate.css";
import { Zoom, Fade } from "react-awesome-reveal";

function Hero() {
  return (
    <>
      <section id="hero-container" className="grid">
        <div className="hero-text-wrapper">
          <Fade damping={2} direction="left" delay={0.2}>
            <h1>Enjoy Seamless Banking with our personalized solutions.</h1>
            <p>
              We provide personalized solutions that simplify banking. With our
              user-friendly and exceptional customer service, you can trust us
              to take care of your financial needs and achieve your goals.
            </p>
            <div className="callToActionBtns">
              <button id="get-started-btn">Get Started</button>
              <button id="our-solution-btn">Our Solutions</button>
            </div>
          </Fade>
        </div>
        <Zoom delay={0.2}>
          <div id="hero-img">
            <img src="/assets/Group 10.svg" alt="hero" id="j" />
          </div>
        </Zoom>
      </section>
    </>
  );
}

export default Hero;
