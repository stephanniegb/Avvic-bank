import React from "react";
import { Leadership } from "../../components";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div id="about-wrapper">
      {/* <section id="aboutUs-bg">
        <h2>About Us</h2>
      </section> */}
      {/* <section>should hvae cta btn</section> */}
      <section id="about-top-text">
        <h2>About Us</h2>
        <p>
          Avvic Group leads an integrated subsidiary system that provides
          collaborative synergies to drive value creation. Avvic provides unique
          opportunities for creativity, career growth, and development in
          specific skill sets.
        </p>
      </section>

      <section id="about">
        <aside className="aboutText">
          <img src="/assets/Group 14.svg" alt="" />
          <h2>Who We Are</h2>
          <Fade damping={2} direction="left" delay={0.2}>
            <p>
              Avvic Group is a Multi-Service Holding Company. The Group, through
              its subsidiaries, provides a wide array of products and services
              which span across several sectors; Consultancy, Financial
              Services, IT, Educational Services, Agriculture, and Real Estate
              Development. Avvic Group leads the subsidiaries and provides
              collaborative synergies that drive value creation through
              innovative products and service delivery.
            </p>
          </Fade>
        </aside>
        <img
          src="/assets/Group 1.png"
          alt=""
          style={{
            position: "absolute",
            right: "10%",
            // left: "50%",
            // width: "400px",
            top: "-22%",
          }}
        />
        <img
          src="/assets/Ellipse 17.png"
          alt=""
          style={{
            position: "absolute",
            left: "50%",
            width: "400px",
            top: "-5%",
          }}
        />
        <div className="image-container">
          <div id="top-right"></div>
          <img id="img" src="assets/consult-min.jpg" alt="" />
          <div id="bottom-left"></div>
        </div>
      </section>
      <section id="leadership">
        <Leadership />
      </section>
      <section id="ourValues-wrapper">
        <h2>Our Values</h2>
        <p>
          At Avvic there are core values that are not subject to change. The
          following set of values will serve to guide the words and actions of
          all those who have the privilege of working for this company.
        </p>

        <div id="ourValues">
          <Fade cascade>
            <div>
              <h3>Confidentiality</h3>
              <p>
                Our very existence depends on our ability to protect and guard
                our customers’ sensitive information. There is zero tolerance
                for any breach of confidentiality.
              </p>
            </div>
            {/* </Fade> */}
            <div>
              <h3>Accountability</h3>
              <p>
                We accept our individual and team responsibilities and we meet
                our commitments. We take responsibility for our performance in
                all our decisions and actions.
              </p>
            </div>
            <div>
              <h3>Transparency</h3>
              <p>
                We seek to establish mutually beneficial, caring relationships
                based on trust and the desire for mutual success.
              </p>
            </div>
          </Fade>

          {/* <Fade damping={2} direction="right" delay={0.2}> */}
        </div>
      </section>
    </div>
  );
}

export default About;
