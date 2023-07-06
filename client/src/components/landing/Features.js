import React, { useEffect } from "react";
import "animate.css";

function Features() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated");
            entry.target.classList.add(entry.target.dataset.animation);
          } else {
            entry.target.classList.remove("animate__animated");
            entry.target.classList.remove(entry.target.dataset.animation);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    const featureElements = document.querySelectorAll(".feature");
    featureElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      featureElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="features">
      <div className="feature">
        {/* <div className="square"></div> */}
        <div>
          <img src="/assets/icons/Group 12.svg" alt="icon" />
        </div>
        <h3>Save</h3>
        <p>
          Start building your financial security today with competitive interest
          rates, flexible deposit options, and convenient access to your funds.
        </p>
      </div>
      {/* classname: animate__animated aanimate__zoomIn */}
      {/* data-animation="animate__zoomIn" */}
      <div className="feature ">
        {/* <div className="square"></div> */}
        <div>
          <img src="/assets/icons/amico 4.svg" alt="icon" />
        </div>
        <h3>Grow</h3>
        <p>
          We empower you to take control of your financial future and achieve
          your long-term goals.
        </p>
      </div>
      <div className="feature">
        {/* <div className="square"></div> */}
        <div>
          <img src="/assets/icons/amico.png" alt="icon" />
        </div>
        <h3>Invest</h3>
        <p>
          Diversify your portfolio and potentially maximize your returns. Invest
          with confidence and let our experts guide you towards financial
          success.
        </p>
      </div>
    </section>
  );
}

export default Features;
