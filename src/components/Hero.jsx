import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import TypingAnimation from "./TypingAnimation";

import { fadeIn } from "../utils/motion";

const Hero = () => {
  const name = {
    firstName: "Kishan",
    lastName: "Dabhi",
  };
  const introSequence = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Musician",
    "Content Creator",
  ];

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* left side */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* circle-gradient decoration */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* name and intro */}
        <motion.div
          variants={fadeIn("down", "spring", 0.5, 2)}
          initial="hidden"
          animate="show"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">{name.firstName}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypingAnimation textSequence={introSequence} />
          </p>
        </motion.div>
      </div>

      {/* 3d model - computer canvas */}
      <div className="w-full h-full flex justify-center items-center">
        <ComputersCanvas />
      </div>

      {/* scroller */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
