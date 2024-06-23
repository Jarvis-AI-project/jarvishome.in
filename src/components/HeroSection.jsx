import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function HeroSection(){
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const t = gsap.timeline({
          scrollTrigger: {
            trigger: ".page2",
            scroll: "body",
            start: "top 70%",
            end: "bottom 100%",
            scrub: 2
          }
        });
        t.from(".page2 img", {
          opacity: 0,
          x: -100,
        });
        t.from(".the", {
          x: 200,
          opacity: 0
        });
        t.from(".future", {
          x: 200,
          opacity: 0
        });
        t.from(".is_here", {
          x: 200,
          opacity: 0
        });
    });
    return (
      <div className='page2'>
        <img src="robot.png" alt="robot"></img>
        <div className = "page2_content">
            <h1 className='the'>The</h1>
            <h1 className='future'>Future</h1>
            <h1 className='is_here'>Is Here</h1> 
        </div>
      </div>
    );
}

export default HeroSection;