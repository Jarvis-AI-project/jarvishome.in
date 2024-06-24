// src/App.jsx
import React from 'react'
import RevealText from './RevealText'
import Navbar from './Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import HeroSection from './HeroSection'
import MissionSection from './MissionSection'
import FeaturesSection from './FeaturesSection'
import DownloadSection from './DownloadSection'
import Footer from './Footer'
import AnimationStyle from '../styles/animation.module.css'

const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    // gsap.to(".body", {
    //   background: "radial-gradient(circle at 40%, #fdf33f, #ffba19 50%, #ff8b39 90%, #ff7a63)",
    //   scrollTrigger: {
    //     trigger: ".page6",
    //     start: "top -600",
    //     end:"top -700",
    //     scrub:2,
    //     toggleActions: "play none none reverse"
    //   }
    // });

    gsap.to(`.${AnimationStyle.page5}`, {
      transform: 'translateX(-290%)',
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.box1}`, {
      y: '5rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top 12%',
        end: 'top -1%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.box2}`, {
      x: '-4.6rem',
      y: '1rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top 12%',
        end: 'top -1%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.img1}`, {
      scale: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top 12%',
        end: 'top -1%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.box3}`, {
      opacity: 0,
      y: '-30rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top -9%',
        end: 'top -12%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.box4}`, {
      scale: 0.8,
      dration: 2,
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top -11%',
        end: 'top -14%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.box5}`, {
      opacity: 0,
      x: '-17rem',
      y: '-4rem',
      transform: 'rotate(0deg)',
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top -14%',
        end: 'top -15%',
        scrub: 1
      }
    })
    gsap.to(`.${AnimationStyle.img2}`, {
      rotation: 720,
      x: '120rem',
      y: '34rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.page5}`,
        scroller: 'body',
        start: 'top -20%',
        end: 'top -100%',
        scrub: 1
      }
    })
  })
  return (
    <div>
      <Navbar />
      <div className="page1">
        <RevealText text="JARVIS" />
      </div>
      <HeroSection />
      <div id="mission">
        <MissionSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>

      <div className={AnimationStyle.page5}>
        <div className={AnimationStyle.animation_page}>
          <h1 className={AnimationStyle.box1}>Everything at Fingertips</h1>
          <h1 className={AnimationStyle.box2}>That's right, Everything</h1>
          <img
            className={AnimationStyle.img1}
            src="/everthing_at_fingertips.png"
            alt="everything at fingertips"
          />
          <h1 className={AnimationStyle.box3}>Download Our App</h1>
          <h1 className={AnimationStyle.box4}>and</h1>
          <h1 className={AnimationStyle.box5}> Begin</h1>
          <h1 className={AnimationStyle.normal}>Your Journey to a</h1>
          <h1 className={AnimationStyle.box6}>Smarter Home</h1>
          <img className={AnimationStyle.img2} src="/design1.png" alt="design"></img>
        </div>
      </div>
      <div className={AnimationStyle.page6}></div>
      <div id="download">
        <DownloadSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
