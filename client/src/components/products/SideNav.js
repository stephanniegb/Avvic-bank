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
          {sideNavOpen ? (
            <div></div>
          ) : (
            // <img src="assets/image 11.png" alt="avvic logo" id="full-logo" />
            <></>
            // <img src="assets/icons/avvic_icon.png" alt="avvic" />
          )}
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
          <Link
            to={`/products/ourproducts`}
            className={
              location.pathname === `/products/ourproducts` ? "activePath" : ""
            }
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 640 512"
                style={{
                  fill:
                    location.pathname === `/products/ourproducts`
                      ? "#0d9999"
                      : "#020b32",
                }}
              >
                <path d="M17.2 125.5c-9 17.9 .6 39.6 19.8 45.1l163.3 46.7c13.9 4 28.8-1.9 36.2-14.3L320 64 75.2 33.4c-6.7-.8-13.3 2.7-16.3 8.7L17.2 125.5zM320 64l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l163.3-46.7c19.3-5.5 28.8-27.2 19.8-45.1L581.1 42.1c-3-6.1-9.6-9.6-16.3-8.7L320 64zm-1.1 64h2.2l0 0h-2.2l0 0zM528 225.3V378.5l-184 46V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V424.5l-184-46V225.3L64 211.6v167c0 22 15 41.2 36.4 46.6l204.1 51c10.2 2.5 20.9 2.5 31 0l204.1-51c21.4-5.3 36.4-24.5 36.4-46.6v-167l-48 13.7z" />
              </svg>
              {sideNavOpen && <p> Our Products</p>}
            </li>
          </Link>
          {productsData.map((product) => {
            const { Name, icon, ...rest } = product;
            const path = Name.toLowerCase().replace(/[\s,]+/g, "");
            return (
              <Link to={`/products/${path}`} key={Name}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 640 512"
                    style={{
                      fill:
                        location.pathname === `/products/${path}`
                          ? "#0d9999"
                          : "#020b32",
                    }}
                  >
                    <path d={icon} />
                  </svg>
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
