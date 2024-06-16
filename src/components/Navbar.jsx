import React, { useState } from 'react'
import gsap from 'gsap'
import NavbarStyles from '../styles/navbar.module.css'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import FeaturesStyle from '../styles/features.module.css'
function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  useGSAP(() => {
    const t = gsap.timeline()
    t.from(
      `.${NavbarStyles.navbar_logo} img, .${NavbarStyles.navbar_logo} h1, .${NavbarStyles.nav_part} h2`,
      {
        y: -50,
        opacity: 0,
        delay: 1,
        stagger: 0.3
      }
    )
    gsap.to(`.${NavbarStyles.navbar}`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${FeaturesStyle.features_section}`,
        start: 'top -600',
        end: 'top -700px',
        scrub: 2
      }
    })
  })

  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.navbar_content}>
        <div className={NavbarStyles.navbar_logo}>
          <img src="/logo.png" alt="Logo" />
          <h1>JARVIS</h1>
        </div>
        <div className={`${NavbarStyles.nav_part} ${isNavOpen ? NavbarStyles.active : ''}`}>
          <Link to="/mission" className={NavbarStyles.nav_link}>
            <h2>Mission</h2>
          </Link>
          <Link to="/features" className={NavbarStyles.nav_link}>
            <h2>Features</h2>
          </Link>
          <Link to="/download" className={NavbarStyles.nav_link}>
            <h2>Download</h2>
          </Link>
          <Link to="/connect" className={NavbarStyles.nav_link}>
            <h2>Connect</h2>
          </Link>

          <button className={NavbarStyles.navbar_signin_button}>Sign In</button>
        </div>
        <div
          className={`${NavbarStyles.hamburger} ${isNavOpen ? NavbarStyles.active : ''}`}
          onClick={toggleNav}
        >
          <span className={NavbarStyles.bar}></span>
          <span className={NavbarStyles.bar}></span>
          <span className={NavbarStyles.bar}></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav
