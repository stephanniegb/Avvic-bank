import React from "react";
import { Fade } from "react-awesome-reveal";

function Services() {
  return (
    <>
      {/* <Fade damping={2} direction="left" delay={0.2}> */}
      <section id="services">
        <h2>Our Services</h2>
        <div id="services-wrapper">
          <div className="service horizontal">
            <div className="service-text">
              <img src="/assets/icons/Bank.svg" alt="icon" />
            </div>
            <div>
              <h3>Business Banking</h3>
              <Fade damping={2} direction="left" delay={0.2}>
                <p>
                  At Avvic Bank, we understand the unique financial needs of
                  businesses. Our comprehensive business banking services are
                  designed to help you thrive and grow. We offer a range of
                  tailored solutions to manage your finances effectively.
                </p>
              </Fade>
            </div>
          </div>
          <span className="vertical"></span>
          <div className="service horizontal">
            <div>
              <img src="/assets/icons/Growth.svg" alt="icon" />
            </div>
            <div className="service-text">
              <h3>Investment Banking</h3>
              <Fade damping={2} direction="right" delay={0.2}>
                <p>
                  When it comes to complex financial transactions, you need a
                  trusted partner with expertise in investment banking. Avvic
                  Bank provides a wide range of investment banking services to
                  corporations, institutions, and high-net-worth individuals.
                </p>
              </Fade>
            </div>
          </div>
          <div className="service mobile-border">
            <div>
              <img src="/assets/icons/Portfolio.svg" alt="icon" />
            </div>
            <div className="service-text">
              <h3>Portfolio Management</h3>
              <Fade damping={2} direction="left" delay={0.2}>
                <p>
                  Managing your investment portfolio requires a strategic
                  approach and expert guidance. At Avvic Bank, our experienced
                  portfolio managers are dedicated to helping you achieve your
                  financial goals.
                </p>
              </Fade>
            </div>
          </div>
          <span id="bottom" className="vertical"></span>
          <div className="service">
            <div>
              <img src="/assets/icons/Accounting.svg" alt="" />
            </div>
            <div className="service-text">
              <h3>Tax and Accounting</h3>
              <Fade damping={2} direction="right" delay={0.2}>
                <p>
                  From tax planning and preparation to bookkeeping and financial
                  statement analysis, we are committed to delivering
                  personalized solutions that optimize your financial position.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* </Fade> */}
    </>
  );
}

export default Services;
