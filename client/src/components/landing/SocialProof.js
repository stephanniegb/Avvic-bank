import React, { useEffect, useState } from "react";

function SocialProof() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => {
  //       const newCount = (prevCount + 1) % 11; // Reset count to 0 when it reaches 10
  //       return newCount;
  //     });
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <>
      <section id="socialProof">
        <p id="why-avvic">Why Choose Avvic?</p>
        <div className="SP-text">
          <h2>
            We don't just help you reach financial milestones, we build lasting
            relationships.
          </h2>
          <div className="social-proof-grid">
            <div>
              <h3>10x</h3>
              <p>Increase in productivity</p>
            </div>
            <div>
              <h3>300%</h3>
              <p>Return on investment</p>
            </div>
            <div>
              <h3>5k+</h3>
              <p>Happy customers</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>5-star reviews</p>
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button id="find-out-btn">Find Out Why</button>
        </div>
      </section>
    </>
  );
}

export default SocialProof;
