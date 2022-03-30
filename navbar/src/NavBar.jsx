import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const NavBar = () => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button"></div>
        <div className="toolbar-logo">
          <a>Temp Navigation</a>
        </div>
        <div className="toolbar-navigation-items">
          <ul>
            <li className="emptySpacer"></li>
            <Link to="/Packages">
              <li>
                <button onClick={topFunction} className="navButton">
                  Packages
                </button>
              </li>
            </Link>
            <Link to="/Calendar">
              <li>
                <button onClick={topFunction} className="navButton">
                  Calendar
                </button>
              </li>
            </Link>
            <Link to="/Stadium">
              <li>
                <button onClick={topFunction} className="navButton">
                  Stadium
                </button>
              </li>
            </Link>
            <Link to="/Cart">
              <li>
                <button onClick={topFunction} className="navButton">
                  Cart
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
