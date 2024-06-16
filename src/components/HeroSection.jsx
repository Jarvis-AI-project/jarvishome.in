import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimationStyle from "../styles/animation.module.css";

function Page2() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        scroll: "body",
        start: "top 70%",
        end: "bottom 100%",
        scrub: 2,
      },
    });
    t.from(".page2 img", {
      opacity: 0,
      x: -100,
    });
    t.from(`.${AnimationStyle.the}`, {
      x: 200,
      opacity: 0,
    });
    t.from(`.${AnimationStyle.future}`, {
      x: 200,
      opacity: 0,
    });
    t.from(`.${AnimationStyle.is_here}`, {
      x: 200,
      opacity: 0,
    });
  });
  return (
    <div className="page2">
      <img src="robot.png" alt="robot"></img>
      <div className="page2_content">
        <h1 className={AnimationStyle.the}>The</h1>
        <h1 className={AnimationStyle.future}>Future</h1>
        <h1 className={AnimationStyle.is_here}>Is Here</h1>
      </div>
    </div>
  );
}

export default Page2;
