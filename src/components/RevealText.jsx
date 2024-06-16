// src/components/RevealText.jsx
import React, { useEffect, useRef } from "react";

const RevealText = ({ text = "JARVIS" }) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const textElement = textRef.current;
    const cursorElement = cursorRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = svgElement.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Move custom cursor
      cursorElement.style.transform = `translate(${x}px, ${y}px)`;

      // Update clip-path to reveal text around cursor
      const clipX = (x / width) * 100;
      const clipY = (y / height) * 100;
      textElement.style.clipPath = `circle(75px at ${clipX}% ${clipY}%)`;
    };

    const handleMouseEnter = () => {
      textElement.style.opacity = 0.7;
      cursorElement.style.opacity = 1;
      textElement.style.stroke = "url(#rainbow)";
    };

    const handleMouseLeave = () => {
      textElement.style.clipPath = "none"; // Remove the clip-path
      textElement.style.stroke = "gray"; // Reset the stroke color to gray
      textElement.style.opacity = "0.39";
    };

    svgElement.addEventListener("mousemove", handleMouseMove);
    svgElement.addEventListener("mouseenter", handleMouseEnter);
    svgElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svgElement.removeEventListener("mousemove", handleMouseMove);
      svgElement.removeEventListener("mouseenter", handleMouseEnter);
      svgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="container">
      <svg
        ref={svgRef}
        className="reveal-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1050 325.07"
      >
        <defs>
          <linearGradient id="rainbow" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#00bfff" /> {/* DeepSkyBlue */}
            <stop offset="25%" stopColor="#1e88e5" /> {/* Blue */}
            <stop offset="50%" stopColor="#ffd700" /> {/* Gold */}
            <stop offset="75%" stopColor="#ff6347" /> {/* Tomato */}
            <stop offset="100%" stopColor="#ff4500" /> {/* OrangeRed */}
          </linearGradient>
        </defs>
        <text
          ref={textRef}
          fill="none"
          stroke="gray"
          strokeWidth="1"
          fontFamily="Arial, sans-serif"
          fontSize="32vh"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          x="50%"
          y="50%"
          opacity="0.39"
          className="reveal-text-path"
        >
          {text}
        </text>
      </svg>
      <div ref={cursorRef} className="custom-cursor"></div>
    </div>
  );
};

export default RevealText;
