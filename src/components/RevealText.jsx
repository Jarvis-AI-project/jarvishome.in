import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/revealtext.module.css';

const RevealText = ({ text = 'JARVIS' }) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const svgElement = svgRef.current;
    const textElement = textRef.current;
    const cursorElement = cursorRef.current;

    const handleInteraction = (e) => {
      const { left, top, width, height } = svgElement.getBoundingClientRect();
      const x = (e.clientX || e.touches[0].clientX) - left;
      const y = (e.clientY || e.touches[0].clientY) - top;

      cursorElement.style.transform = `translate(${x}px, ${y}px)`;

      const clipX = (x / width) * 100;
      const clipY = (y / height) * 100;
      textElement.style.clipPath = `circle(75px at ${clipX}% ${clipY}%)`;
    };

    const handleEnter = () => {
      textElement.style.opacity = 0.7;
      cursorElement.style.opacity = 1;
      textElement.style.stroke = `url(#${isMobile ? 'rainbowVertical' : 'rainbow'})`;
    };

    const handleLeave = () => {
      textElement.style.clipPath = 'none';
      textElement.style.stroke = 'gray';
      textElement.style.opacity = '0.39';
    };

    if (isMobile) {
      svgElement.addEventListener('touchmove', handleInteraction);
      svgElement.addEventListener('touchstart', handleEnter);
      svgElement.addEventListener('touchend', handleLeave);
    } else {
      svgElement.addEventListener('mousemove', handleInteraction);
      svgElement.addEventListener('mouseenter', handleEnter);
      svgElement.addEventListener('mouseleave', handleLeave);
    }

    return () => {
      if (isMobile) {
        svgElement.removeEventListener('touchmove', handleInteraction);
        svgElement.removeEventListener('touchstart', handleEnter);
        svgElement.removeEventListener('touchend', handleLeave);
      } else {
        svgElement.removeEventListener('mousemove', handleInteraction);
        svgElement.removeEventListener('mouseenter', handleEnter);
        svgElement.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [isMobile]);

  return (
    <div className={styles.container}>
      <svg
        ref={svgRef}
        className={styles.revealSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1050 325.07"
      >
        <defs>
          <linearGradient id="rainbow" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#00bfff" />
            <stop offset="25%" stopColor="#1e88e5" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="75%" stopColor="#ff6347" />
            <stop offset="100%" stopColor="#ff4500" />
          </linearGradient>
          <linearGradient id="rainbowVertical" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#00bfff" />
            <stop offset="25%" stopColor="#1e88e5" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="75%" stopColor="#ff6347" />
            <stop offset="100%" stopColor="#ff4500" />
          </linearGradient>
        </defs>
        <text
          ref={textRef}
          className={styles.revealTextPath}
          x="50%"
          y="50%"
        >
          {isMobile ? text.split('').map((char, index) => (
            <tspan key={index} x="50%" dy={index === 0 ? '0' : '1em'}>
              {char}
            </tspan>
          )) : text}
        </text>
      </svg>
      <div ref={cursorRef} className={styles.customCursor}></div>
    </div>
  );
};

export default RevealText;