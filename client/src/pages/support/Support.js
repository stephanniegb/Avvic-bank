import { Community, FqaDropDown } from "../../components";
import faqData from "../../Data/FAQ/faq.json";

function Support() {
  return (
    <>
      <section id="contact-wrapper">
        <section className="support-top">
          <h2>How Can we help you today?</h2>
          <p>Got Something to tell us? Reach out Today!</p>
        </section>
        <section id="getInTouch">
          <div>
            <img src="/assets/icons/Vector 2 2.svg" alt="" />
            <h5>Email</h5>
            <p>Reach us via Email</p>
            <a href="#">info@avvicgroup.com</a>
          </div>
          <div>
            <img src="/assets/icons/vector 6.svg" alt="" />
            <h5>Phone</h5>
            <p>Reach Us via moblie</p>
            <a href="#">+2348149316300</a>
          </div>
          <div>
            <img src="/assets/icons/Vector 3 2.svg" alt="" />
            <h5>Office</h5>
            <p>House B1, Rose Gardens Courts,Rangers Avenue, Enugu. Nigeria</p>
            <a href="#" id="get-direction" target="_blank">
              Get Directions{" "}
              <span>
                {" "}
                <img src="/assets/icons/Vector 10.svg" alt="" />
              </span>
            </a>
          </div>
          <div>
            <img src="/assets/icons/Vector 2 2.svg" alt="" />
            <h5>Socials</h5>
            <div id="socials-links-wrapper">
              <a href="">
                <img src="/assets/icons/Vector 6 2.svg" alt="" />
              </a>
              <a href="">
                <img src="/assets/icons/Vector 7 3.svg" alt="" />
              </a>
              <a href="">
                <img src="/assets/icons/Vector 8.svg" alt="" />
              </a>
              <a href="">
                <img src="/assets/icons/Vector 7.svg" alt="" />
              </a>
              <a href="https://wa.me/+2348149316300?text=Hello">
                <img src="assets/icons/Vector 7.svg" alt="" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <FqaDropDown Data={faqData} />
        </section>
      </section>
      <Community />
    </>
  );
}

export default Support;
// ### Useful resources

// - [A blog post by Jima Victor](https://webcodespace.com/how-to-create-a-three-state-toggle-switch-using-html-css-and-javascript) - This helped me figure out how to handle the toggle switch. I really liked this pattern and will use it going forward.
// - [Useful resources](#useful-resources)
