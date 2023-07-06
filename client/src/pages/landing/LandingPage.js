import {
  Community,
  Features,
  GetApp,
  Hero,
  Services,
  Slider,
  SocialProof,
} from "../../components";

function LandingPage() {
  return (
    <div id="landing-p-wrapper">
      <Hero />
      <Features />
      <Services />
      <SocialProof />
      {/* <section>
        <h3>Our Mission</h3>
        <p>
          To provide personalized solutions that simplify banking. With our
          user-friendly and exceptional customer service, you can trust us to
          take care of your financial needs and achieve your goals.
        </p>
      </section> */}

      <section id="why-choose-us-section">
        <Slider />
        {/* <h5>
        <span>Avvic</span> is a digital bank that provides personalized
          solutions that simplify banking. With our user-friendly and
          exceptional customer service, you can trust us to take care of your
          financial needs and achieve your goals.
        </h5> */}
      </section>
      <GetApp />
      <section id="ctaBanner">
        <h3>Be Part Of The Avvic Experience.</h3>
        <button>Get Started</button>
      </section>
      <Community />
    </div>
  );
}

export default LandingPage;
