// src/App.jsx
import React from 'react';
import RevealText from './RevealText';
import Navbar from './Navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import FeaturesSection from './FeaturesSection';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

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
    
    gsap.to(".animation_page",{
      transform: "translateX(-290%)",
      scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        start: "top 0%",
        end:"top -100%",
        scrub:1,
      }
    })
    gsap.from(`.${AnimationStyle.first_box}`, {
      y: '5rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: 'body',
        start: 'top 12%',
        end: 'top -1%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.second_box}`, {
      x: '-4.6rem',
      y: '1rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: 'body',
        start: 'top 12%',
        end: 'top -1%',
        scrub: 1
      }
    })
    gsap.from('.img1', {
      scale: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: 'body',
        start: 'top 12%',
        end: 'top -1%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.third_box}`, {
      opacity: 0,
      y: '-30rem',
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: 'body',
        start: 'top -9%',
        end: 'top -12%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.fourth_box}`, {
      scale: 0.8,
      duration: 2,
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: 'body',
        start: 'top -11%',
        end: 'top -14%',
        scrub: 1
      }
    })
    gsap.from(`.${AnimationStyle.fifth_box}`, {
      opacity: 0,
      x: '-17rem',
      y: '-4rem',
      transform: 'rotate(0deg)',
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
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
        trigger: `.${AnimationStyle.animation_container}`,
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
      <HeroSection/>
      <MissionSection/>
      <FeaturesSection/>
      <div className="page5">
        <div className="animation_page">
          <h1 className="box1">Everything at Fingertips</h1>
          <h1 className="box2 " >That's right, Everything</h1>
          <img className="img1" src="/everthing_at_fingertips.png" alt="everything at fingertips"/>
          <h1 className="box3">Download Our App</h1>
          <h1 className="box4">and</h1>
          <h1 className="box5"> Begin</h1>
          <h1 className="normal">Your Journey to a</h1>
          <h1 className='box6'>Smarter Home</h1>
          <img className="img2" src="/design1.png" alt="design" ></img>
          {/* <img className="img3" src="/design2.png" alt="design" ></img> */}
        </div>
      </div>
      <div className='page6'></div>
      <DownloadSection/>
      <Footer/>
    </div>
  );
};


export default App
