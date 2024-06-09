import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Page3(){
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(".mission",{
            transform: "rotateX(45deg)",
            transition: "transform",
            transformStyle: "preserve-3d",
            scrollTrigger: {
              trigger: ".page2", 
              start: "top -200", 
              end:"top -800px",
              scrub:2,
              toggleActions: "play none none reverse" 
            }
        });      
    });
    return (
      <div className="page3">
        <div className="mission">
          <h1>Our Mission</h1>
          <p>At Jarvis, we believe that cutting-edge technology should be accessible to everyone, not just the privileged few. </p>
          <p>Our mission is to democratize the smart home experience by offering innovative solutions that are both cutting-edge and affordable.</p>
          <p>We are driven by the conviction that technology has the power to transform our lives, making them more convenient, efficient, and connected. However, we recognize that many smart home solutions on the market today come with a steep price tag, putting them out of reach for a significant portion of the population.</p>
          <p>That's why we are committed to pushing the boundaries of innovation while keeping our products and services within reach of the average consumer. Our team of visionary engineers and designers work tirelessly to develop cutting-edge smart home solutions that seamlessly integrate with your lifestyle.</p>
          <p>We believe that true innovation lies not in creating flashy gimmicks but in designing practical solutions that address real-world problems. </p>
        </div>
      </div>
    );
}

export default Page3;