import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import HeroStyle from "../styles/hero.module.css";

function HeroSection() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: `.${HeroStyle.page2}`,
        scroll: 'body',
        start: 'top 70%',
        end: 'bottom 100%',
        scrub: 2
      }
    })
    t.from(`.${HeroStyle.page2} img`, {
      opacity: 0,
      x: -100
    })
    t.from(`.${HeroStyle.the}`, {
      x: 200,
      opacity: 0
    })
    t.from(`.${HeroStyle.future}`, {
      x: 200,
      opacity: 0
    })
    t.from(`.${HeroStyle.is_here}`, {
      x: 200,
      opacity: 0
    })
  })
  return (
    <div className={HeroStyle.page2}>
      <img src="robot.png" alt="robot"></img>
      <div className={HeroStyle.page2_content}>
        <h1 className={HeroStyle.the}>The</h1>
        <h1 className={HeroStyle.future}>Future</h1>
        <h1 className={HeroStyle.is_here}>Is Here</h1>
      </div>
    </div>
  )
}

export default HeroSection
