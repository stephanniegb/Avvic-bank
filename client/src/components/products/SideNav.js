import { useState, useRef, useEffect } from "react";
import productsData from "../../Data/products.json";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const [sideNavOpen, setSideNavOpen] = useState(true);
  const hamburgerRef = useRef();
  const sideMenu = useRef();
  const sideNavContainer = useRef();
  const location = useLocation();
  const togglenav = () => {
    const isMobile = window.innerWidth < 1025;
    if (!isMobile) {
      hamburgerRef.current.classList.toggle("active");
      sideMenu.current.classList.toggle("active");
      sideNavContainer.current.classList.toggle("active");
      setSideNavOpen(!sideNavOpen);
    }
  };

  const updateSideNav = () => {
    if (window.innerWidth < 1025) {
      hamburgerRef.current.classList.remove("active");
      sideMenu.current.classList.remove("active");
      sideNavContainer.current.classList.remove("active");
      setSideNavOpen(false);
    } else {
      setSideNavOpen(true);
      hamburgerRef.current.classList.add("active");
      sideMenu.current.classList.add("active");
      sideNavContainer.current.classList.add("active");
    }
  };

  useEffect(() => {
    updateSideNav(); // Update initial sideNavOpen state on component mount

    const handleResize = () => {
      updateSideNav();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sideNav-container active" ref={sideNavContainer}>
      <div className="">
        <div className="nav-upper">
          {sideNavOpen ? <div></div> : <></>}
          <div class="">
            <button
              className="hamburger active"
              ref={hamburgerRef}
              onClick={togglenav}
            >
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
          </div>
        </div>
      </div>
      <nav className="sidenav-open active" ref={sideMenu}>
        <ul className="nav-links">
          <Link to={`/products/ourproducts`}>
            <li
              className={
                location.pathname === `/products/ourproducts`
                  ? "activePath"
                  : ""
              }
            >
              <img src="/assets/icons/Group.png" alt="" />
              {sideNavOpen && <h4> Our Products</h4>}
            </li>
          </Link>
          {productsData.map((product) => {
            const { Name, icon, ...rest } = product;
            const path = Name.toLowerCase().replace(/[\s,]+/g, "");
            return (
              <Link to={`/products/${path}`} key={Name}>
                <li
                  className={
                    location.pathname === `/products/${path}`
                      ? "activePath"
                      : ""
                  }
                >
                  <img src={icon} alt="icon" />
                  {sideNavOpen && <p>{Name}</p>}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
