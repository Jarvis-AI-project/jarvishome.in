import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FeatureStyle from '../styles/features.module.css'

function Features() {
  // useGSAP(() => {
  //   const t = gsap.timeline();
  //   t.from(".card:nth-of-type(1)",{
  //     opacity:0,
  //     duration:0.5
  //   });
  //   t.to(".card:nth-of-type(2)",{
  //     y:135,
  //     opacity:0,
  //     duration:1
  //   });
  // });
  return (
    <div className={FeatureStyle.page4}>
      <h1>Features</h1>
      <div className={FeatureStyle.card_container}>
        <div className={FeatureStyle.card}>
          <h2>Device Integration</h2>
          <div className={FeatureStyle.card_content}>
            <p>
              Connect each and every one of your devices, be it smart or non-smart using our
              state-of-the-art firmware board, that can turn your whole house into a smart home.
            </p>
          </div>
        </div>
        <div className={FeatureStyle.card}>
          <h2>Your Home at Your Fingertips</h2>
          <div className={FeatureStyle.card_content}>
            <p>
              Our mobile app lets you take control of every device in your home from a simple tap on
              your mobile screen from anywhere in your house.
            </p>
          </div>
        </div>
        <div className={FeatureStyle.card}>
          <h2>Security You Can Trust</h2>
          <div className={FeatureStyle.card_content}>
            <p>
              Your security is our utmost priority. We use robust security measures for ensuring
              that your house is as safe as ours.
            </p>
          </div>
        </div>
        <div className={FeatureStyle.card}>
          <h2>State-of-the-art AI</h2>
          <div className={FeatureStyle.card_content}>
            <p>
              Using our speech recognition model, you can control your devices using simple voice
              commands.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
