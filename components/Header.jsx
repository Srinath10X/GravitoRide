import React, { useEffect } from "react";
import "./Header.css";

const Header = () => {
  const menuItems = [
    { href: "#", text: "Home" },
    { href: "#", text: "Services" },
    { href: "#about", text: "About" },
    { href: "#reviews", text: "Reviews" },
  ];

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    const handleNavLinkClick = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document.querySelectorAll(".nav-link").forEach((n) => {
        n.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <>
      <header>
        <nav class="navbar">
          <a href="#" class="logo">
            GravitoRide
          </a>
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a href={item.href} className="nav-link">
                  {item.text}
                </a>
              </li>
            ))}
            <div className="signup-wrapper">
              <li className="nav-menu">
                <a href="#" className="auth login">
                  Login
                </a>
              </li>
              <li className="nav-menu">
                <a href="#" className="auth signup">
                  Sign Up
                </a>
              </li>
            </div>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
