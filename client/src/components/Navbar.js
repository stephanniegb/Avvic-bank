import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import useHamburger from "../hooks/useHamburger";
function Navbar() {
  const hamburgerRef = useRef();
  const mobileMenu = useRef();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showActiveHam, handleClick] = useHamburger(
    hamburgerRef,
    mobileMenu,
    isMenuOpen,
    setIsMenuOpen
  );
  return (
    <>
      <nav id="navbar">
        <div className="logo-div">
          <Link to={"/"}>
            <img src="/assets/image 11-min.png" alt="avvic logo" />
          </Link>

          <ul className="nav-links">
            <li>
              <Link
                to={"/"}
                className={location.pathname === "/" ? "activePath" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={location.pathname === "/about" ? "activePath" : ""}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={"/careers"}
                className={location.pathname === "/careers" ? "activePath" : ""}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className={
                  location.pathname === "/products" ? "activePath" : ""
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={location.pathname === "/contact" ? "activePath" : ""}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-btn-wrapper">
          <Link
            to={"#"}
            className={location.pathname === "#" ? "activePath" : ""}
          >
            <button className="nav-btn">Get Started</button>
          </Link>
        </div>
        <button class="hamburger" ref={hamburgerRef} onClick={showActiveHam}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </nav>
      <nav className="mobile-nav" ref={mobileMenu}>
        <ul>
          <li onClick={handleClick}>
            <Link
              to={"/"}
              className={location.pathname === "/" ? "activePath" : ""}
            >
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to={"/about"}
              className={location.pathname === "/about" ? "activePath" : ""}
            >
              About us
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to={"/careers"}
              className={location.pathname === "/careers" ? "activePath" : ""}
            >
              Careers
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to={"/products"}
              className={location.pathname === "/products" ? "activePath" : ""}
            >
              Products
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to={"/contact"}
              className={location.pathname === "/contact" ? "activePath" : ""}
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
