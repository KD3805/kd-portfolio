import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc"; // Higher Order Component

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      scale={1.1}
      glareEnable={true}
      glareMaxOpacity={0.45}
      glareColor="#fff"
      glareBorderRadius="20px"
      glarePosition="bottom"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-white text-[16px] font-medium mt-2 text-center">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Aspiring full stack developer with a strong passion for web development
        and a keen interest in machine learning. Eager to leverage my skills and
        project experience to contribute to innovative software solutions while
        continuously learning and growing in the field.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Tilt key={service.title} className="xs:w-[250px] w-full">
            <ServiceCard index={index} {...service} />
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
