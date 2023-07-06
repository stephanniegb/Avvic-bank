import { DropDown } from "../../components";

function Careers() {
  return (
    <div id="career-wrapper">
      {/* <section id="career">
        <h2>Careers</h2>
      </section> */}
      <section id="career-dev">
        <aside id="career-dev-text">
          <h2>Career Development</h2>
          <p>
            Avvic Group leads an integrated subsidiary system that provides
            collaborative synergies to drive value creation. Avvic provides
            unique opportunities for creativity, career growth, and development
            in specific skill sets.
          </p>
          {/* <p>
            The organization continuously demonstrates a commitment to nurturing
            and retaining a creative, innovative, and value-driven environment
            that motivates individuals and teams for high performance. The Avvic
            team extends you a warm welcome if you are:
          </p>
          <ul>
            <li>An out-of-the-box thinking, creative individual.</li>
            <li>A problem solver with great analytical skills.</li>
            <li>Motivated, focused, and self-driven.</li>
            <li>A team player with a good attitude.</li>
          </ul> */}
        </aside>
        {/* <div className="image-container">
          <div id="top-right"></div>
          <img src="assets/IMG_2972-min-scaled.jpg" alt="" />
          <div id="bottom-left"></div>
        </div> */}
      </section>

      <section id="team-dev">
        <article id="article-1">
          <aside>
            <h3>Continuing Team Development</h3>
            <p>
              Avvic Group places priority on building a value-driven team of
              talented, creative individuals who share the organisation’s ideals
              and are motivated to achieve our strategic objectives. The Group’s
              functional development process ensures a work environment that
              fosters creativity, consistent development, and expansion of the
              spheres of profitable opportunities.
            </p>
          </aside>
          <div>
            <img src="/assets/Group 15.png" alt="" />
          </div>
        </article>
        <article id="article-2">
          <aside>
            <div id="h3-div">
              <h3>Our Work Ethics</h3>
            </div>
            <p>
              Avvic Group is committed to strong work ethics. The Group places a
              premium on time-tested values of focus, integrity, hard work and
              diligence. This forms the pivotal structure of the Group’s work
              culture and organisational policies. Work-life balance is integral
              to the Group’s philosophy of consistent performance. We place
              utmost importance on the health and well-being of our team
              members.
            </p>
          </aside>
          <div id="img-div">
            <img src="/assets/Group 16.png" alt="" />
          </div>
        </article>
      </section>

      {/* <section id="team-dev-grid">
        <article className="grid-col-span-2">
          <h3>Continuing Team Development</h3>
          <p>
            Avvic Group places priority on building a value-driven team of
            talented, creative individuals who share the organisation’s ideals
            and are motivated to achieve our strategic objectives. The Group’s
            functional development process ensures a work environment that
            fosters creativity, consistent development, and expansion of the
            spheres of profitable opportunities.
          </p>
        </article>
        <article>
          <h3>Work Ethics</h3>
          <p>
            Avvic Group is committed to strong work ethics. The Group places a
            premium on time-tested values of focus, integrity, hard work and
            diligence. This forms the pivotal structure of the Group’s work
            culture and organisational policies. Work-life balance is integral
            to the Group’s philosophy of consistent performance. We place utmost
            importance on the health and well-being of our team members.
          </p>
        </article>
        <div className="grid-div">
          <img
            src="/assets/medium-shot-smiley-people-posing-min.jpg"
            alt="our staff"
          />
          <img
            src="/assets/four-african-friends-having-fun-outdoors-two-black-girls-with-guys-min.jpg"
            alt="our staff"
          />
        </div>
        <div className="grid-div-2">
          <img
            src="/assets/group-people-standing-park-sunlight-with-blurry-min.jpg"
            alt="our staff"
          />
          <img
            src="/assets/group-friends-posing-outside-clothing-store-city-min.jpg"
            alt="our staff"
          />
        </div>

        <img
          className="grid-col-span-2"
          src="/assets/group-ten-african-american-people-posed-street-city-fashionable-people-africa-shows-thumb-up-min.jpg"
          alt="our staff"
        />
      </section> */}
      <section id="jobOpening">
        <div id="job-opening-heading">
          <h3>Job Openings</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{" "}
          </p>
        </div>
        <>
          <DropDown />
        </>
      </section>
    </div>
  );
}

export default Careers;
