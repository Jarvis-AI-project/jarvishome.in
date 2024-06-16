// src/App.jsx
import React from "react";
import RevealText from "./RevealText";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import FeaturesSection from "./FeaturesSection";
import HomeStyle from "../styles/home.module.css";
import AnimationStyle from "../styles/animation.module.css";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".animation_page", {
      transform: "translateX(-290%)",
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
      },
    });
    gsap.from(`.${AnimationStyle.first_box}`, {
      y: "5rem",
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top 12%",
        end: "top -1%",
        scrub: 1,
      },
    });
    gsap.from(`.${AnimationStyle.second_box}`, {
      x: "-4.6rem",
      y: "1rem",
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top 12%",
        end: "top -1%",
        scrub: 1,
      },
    });
    gsap.from(".img1", {
      scale: 0.6,
      opacity: 0,
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top 12%",
        end: "top -1%",
        scrub: 1,
      },
    });
    gsap.from(`.${AnimationStyle.third_box}`, {
      opacity: 0,
      y: "-30rem",
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top -9%",
        end: "top -12%",
        scrub: 1,
      },
    });
    gsap.from(`.${AnimationStyle.fourth_box}`, {
      scale: 0.8,
      duration: 2,
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top -11%",
        end: "top -14%",
        scrub: 1,
      },
    });
    gsap.from(`.${AnimationStyle.fifth_box}`, {
      opacity: 0,
      x: "-17rem",
      y: "-4rem",
      transform: "rotate(0deg)",
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top -14%",
        end: "top -15%",
        scrub: 1,
      },
    });
    gsap.to(".img2", {
      rotation: 720,
      x: "120rem",
      y: "34rem",
      scrollTrigger: {
        trigger: `.${AnimationStyle.animation_container}`,
        scroller: "body",
        start: "top -20%",
        end: "top -100%",
        scrub: 1,
      },
    });
  });

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={""} />
          <Route path="/mission" element={""} />
          <Route path="/features" element={""} />
          <Route path="/download" element={""} />
          <Route path="/connect" element={""} />
        </Routes>

        <div className={HomeStyle.text_container}>
          <RevealText text="JARVIS" />
        </div>
        <HeroSection />
        <MissionSection />
        <FeaturesSection />
        <div className={AnimationStyle.animation_container}>
          <div className="animation_page">
            <h1 className={AnimationStyle.first_box}>
              Everything at Fingertips
            </h1>
            <h1 className={AnimationStyle.second_box}>
              That's right, Everything
            </h1>
            <img
              className="img1"
              src="/everthing_at_fingertips.png"
              alt="everything at fingertips"
            />
            <h1 className={AnimationStyle.third_box}>Download Our App</h1>
            <h1 className={AnimationStyle.fourth_box}>and</h1>
            <h1 className={AnimationStyle.fifth_box}> Begin</h1>
            <h1 className="normal">Your Journey to a</h1>
            <h1 className={AnimationStyle.sixth_box}>Smarter Home</h1>
            <img className="img2" src="/design1.png" alt="design"></img>
            <img className="img3" src="/design2.png" alt="design"></img>
          </div>
        </div>

        <div className="page7">
          <div className={HomeStyle.social_media_links}>
            <img src="/discord.png" alt="social media links" />
            <img src="/mail.png" alt="social media links" />
            <img src="/twitter.png" alt="social media links" />
            <img src="/instagram.png" alt="social media links" />
          </div>
          <button className={HomeStyle.download_btn}>
            <span>Download</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;
