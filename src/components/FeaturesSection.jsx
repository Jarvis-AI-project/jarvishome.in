import React from "react";
import FeaturesStyle from '../styles/features.module.css';

function Page4(){
    return (
      <div className={FeaturesStyle.features_section}>
        <h1>Features</h1>
        <div className={FeaturesStyle.card_container}> 
          <div className={FeaturesStyle.card}>
            <h2>Device Integration</h2>
            <div className={FeaturesStyle.card_content}>
              <img  src="/feature1.png" alt="feature"/>
              <p>Connect each and every one of your devices, be it smart or non-smart using our state-of-the-art firmware board,that can turn your whole house into a smart home.</p>
            </div>
          </div>
          <div className={FeaturesStyle.card}>
            <h2>Your Home at Your Fingertips</h2>
            <div className={FeaturesStyle.card_content}>
              <img src="/feature2.png" alt="feature"/>
              <p>Our mobile app lets you take control of every device in your home from a simple tap on your mobile screen from anywhere in your house.</p>
            </div>
          </div>
          <div className={FeaturesStyle.card}>
            <h2>Security You Can Trust</h2>
            <div className={FeaturesStyle.card_content}>
              <img src="/feature3.png" alt="feature"/>
              <p>Your security is our utmost priority. We use robust security measures for ensuring that your house is as safe as ours.</p>
            </div>
          </div>
          <div className={FeaturesStyle.card}>
            <h2>State-of-the-art AI</h2>
            <div className={FeaturesStyle.card_content}>
              <img className={FeaturesStyle.small_image} src="/feature4.png" alt="feature"/>
              <p>Using our speech recognition model, you can control your devices using simple voice commands.</p>
            </div>
          </div>
        </div> 
      </div>
    );
}

export default Page4;