"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Transform Your Living Space with Smart Automation Solutions`;

function SpotLightSection() {
  return (
    <div className="spotlight_section">
    <div className="h-[40rem] w-full bg-black/[0.96] flex flex-col items-center justify-center overflow-hidden rounded-md relative antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white">
          MARVIN
        </h1>
      </div>
      <div className="w-[46rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 -top-5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 -top-5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 -top-5 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 -top-5 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

        <div className="flex justify-center">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default SpotLightSection;