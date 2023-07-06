import React from "react";

function Footer() {
  return (
    <div id="footer-wrapper">
      <div className="logo-div">
        <img src="/assets/image 11-min.png" alt="AVVIC logo" />
      </div>
      <div className="text-div">
        <div>
          <h4>Subscribe</h4>
          <p>Join our newsletter to stay up to date on latest information</p>
          <div className="input-div">
            <input type="email" name="" id="" placeholder="Enter your email" />
            <button>Subscribe</button> <br />
          </div>
          <a href="#" id="input-link">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </a>
        </div>
        <div>
          <h4>Address:</h4>
          <p>
            House B1, <br /> Rose Gardens Courts,Rangers Avenue, Enugu. <br />{" "}
            Nigeria
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact:</h4>
          <a href="mailto:info@avvicgroup.com">info@avvicgroup.com</a> <br />
          <a href="tel:+2348149316300"> +2348149316300</a>
          <div id="social-links">
            <a href="#">
              <img src="assets/icons/Vector 2.svg" alt="" />
            </a>
            <a href="#">
              <img src="assets/icons/Vector 4.svg" alt="" />
            </a>
            <a href="#">
              <img src="assets/icons/Vector 5.svg" alt="" />
            </a>
            <a href="#">
              <img src="assets/icons/Vector 3.svg" alt="" />
            </a>
          </div>
        </div>
        <div id="footer-links-wrapper">
          <h4>Quick Links</h4>
          <div id="footer-links">
            <a href="#">Home</a>
            <a href="">About Us</a>
            <a href="">Open Account</a>
            <a href="">Careers</a>
          </div>
        </div>
      </div>
      <div className="border-div"></div>
      <div id="policy-div-wapper">
        <p>2023 Avvic Group. All rights reserved.</p>
        <div id="policy-div">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
