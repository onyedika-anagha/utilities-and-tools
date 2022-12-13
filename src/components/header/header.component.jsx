import { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/img/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false),
    [isMobile, setIsMobile] = useState(false),
    menuToggler = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleResize = (event) => {
      const isMobile = window.innerWidth <= 1024;
      //   console.log();
      if (isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        // setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        id="header_main"
        className="header"
        style={{
          position: isOpen && isMobile ? "unset" : "relative",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div
                  className="header__logo"
                  style={{ opacity: isOpen && isMobile ? 0 : 1 }}
                >
                  <Link to="/">
                    <img
                      id="site-logo"
                      src={logo}
                      alt="ICOLand"
                      width="165"
                      // height="40"
                      data-retina={logo}
                      data-width="165"
                      data-height="40"
                    />
                  </Link>
                </div>

                <div className="header__right">
                  <nav
                    id="main-nav"
                    className="main-nav"
                    style={{ display: !isOpen && isMobile ? "none" : "flex" }}
                  >
                    {isMobile && (
                      <center>
                        <Link to="/">
                          <img
                            id="site-logo"
                            src={logo}
                            alt="ICOLand"
                            width="165"
                            // height="40"
                            data-retina={logo}
                            data-width="165"
                            data-height="40"
                          />
                        </Link>
                      </center>
                    )}

                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item ">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Home Page
                        </NavLink>
                      </li>
                      <li className="menu-item ">
                        <NavLink
                          to="/calculator"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Calculator
                        </NavLink>
                      </li>
                      <li className="menu-item ">
                        <NavLink
                          to="/converter"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Converter
                        </NavLink>
                      </li>
                      <li className="menu-item ">
                        <NavLink
                          to="/currency/converter"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Currency Converter
                        </NavLink>
                      </li>
                    </ul>
                  </nav>

                  <div className="mobile-button" onClick={menuToggler}>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9991,
            width: "100%",
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
          }}
          onClick={menuToggler}
        >
          {" "}
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Header;
