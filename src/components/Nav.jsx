import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useGSAP(() => {
    const t = gsap.timeline();
    t.from(".logo img, .logo h1, .nav_part h2", {
      y: -50,
      opacity: 0,
      delay: 1,
      stagger: 0.3,
    });
    gsap.to(".navbar", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".page4",
        start: "top -600",
        end: "top -700px",
        scrub: 2,
      },
    });
  });

  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h1>JARVIS</h1>
        </div>
        <div className={`nav_part ${isNavOpen ? "active" : ""}`}>
          <h2>Mission</h2>
          <h2>Features</h2>
          <h2>Download</h2>
          <h2>Connect</h2>
          <button className="signin_button">Sign In</button>
        </div>
        <div
          className={`hamburger ${isNavOpen ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;