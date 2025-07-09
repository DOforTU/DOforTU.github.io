import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="wrapper" id="header-wrapper">
                <Link to="/#" className="logo">
                    <img src="/dotu_text_logo_white.png" alt="DOforTU Logo" />
                </Link>
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`menu-section ${isMenuOpen ? "open" : ""}`}>
                    <div>
                        <Link to="/about-us" className={location.pathname === "/about-me" ? "active" : ""}>
                            About us
                        </Link>
                    </div>
                    <div>
                        <a href="https://github.com/DOforTU" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
