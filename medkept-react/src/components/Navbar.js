import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faNotesMedical ,faStethoscope ,faAddressCard } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Button } from "./Button";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <img src="assets/pic.jpg" className="navbar_logo" />
          <div className="name"><span>M</span>ed <span>K</span>ept <span>.</span> </div>

          <div className="menu" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <ul className="nav_item">
                <Link to="/" className="nav_links" onClick={closeMobileMenu}>
                  Home <FontAwesomeIcon className="fa_icon" icon={faHome}  />
                </Link>
              </ul>

              <ul className="nav_item">
                <Link
                  to="/manager"
                  className="nav_links"
                  onClick={closeMobileMenu}
                >
                  Registration <FontAwesomeIcon className="fa_icon" icon ={faAddressCard}  />
                  {/* Manager */}
                </Link>
              </ul>

              <ul className="nav_item">
                <Link
                  to="/doctor"
                  className="nav_links"
                  onClick={closeMobileMenu}
                >
                  Reports <FontAwesomeIcon className="fa_icon" icon={faStethoscope} />
                  {/* Patients */}
                </Link>
              </ul>

              <ul className="nav_item">
                <Link
                  to="/patient"
                  ethid={"abcd"}
                  className="nav_links"
                  onClick={closeMobileMenu}
                >
                  Prescription <FontAwesomeIcon className="fa_icon" icon={faNotesMedical}/>
                  {/* doctor */}
                </Link>
              </ul>
            </ul>
            {/* {button && <Button buttonStyle="btn--outline" >SIGN UP</Button>} */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
