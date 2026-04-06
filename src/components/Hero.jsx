import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="md:mt-45 md:mx-20 mt-46 mb-60">
      <div className="text-[16px] text-[hsl(0,0%,70%)] font-nav">
        <p>Hey there, this is</p>
      </div>
      <h1 className="text-[50px] tracking-wider sm:text-[58px] md:text-[70px] lg:text-[80px] font-main text-[#ffffff]">
        Anant Panwar.
      </h1>
      <div className="leading-tight text-[39px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-main bg-gradient-to-r from-[hsl(0,0%,60%)] to-[hsl(0,0%,90%)] bg-clip-text text-transparent">
        <p>Building scalable web experiences.</p>
      </div>
      <div className="text-[18px] text-[hsl(0,0%,90%)] font-body md:w-123 mt-5">
        <p>
          I&apos;m a software engineer passionate about crafting innovative and
          user-friendly web solutions. I&apos;m dedicated to developing
          scalable, high-quality digital experiences that prioritize performance
          and accessibility.
        </p>
      </div>
    </div>
  );
};

export default Hero;