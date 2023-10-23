import mobileLogo from "../../assets/logo/logo-1.svg";
import styles from "./navbar.module.css";
import navLinks from "./navLinks";
import { MdSegment } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleUrl = (url) => {
    window.history.pushState({}, "", `/${url}`);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 shadow-sm"
      style={{ zIndex: 2 }}
    >
      <div className="container">
        <ScrollLink
          className="navbar-brand d-block d-lg-none"
          onClick={scrollToTop}
          to="/"
        >
          <img src={mobileLogo} alt="website logo" width="92" height="44" />
        </ScrollLink>
        <button
          className="navbar-toggler shadow-none border-0 outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className=" text-success">
            <MdSegment />
            {/* {navOpen ? <MdClear /> : <MdSegment />} */}
          </span>
        </button>
        <div
          className={`  collapse navbar-collapse flex-lg-grow-1`}
          id="navbarNav"
        >
          <ul className={` navbar-nav ${styles.navbar__nav}`}>
            {navLinks?.map(({ id, title, path }) => {
              return (
                <li
                  className="nav-item"
                  key={id}
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                  // onClick={() => setNavOpen(!navOpen)}
                >
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={-165}
                    duration={500}
                    to={path}
                    activeClass={styles.active}
                    onClick={() => handleUrl(path)}
                  >
                    {title}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
