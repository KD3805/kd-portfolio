import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";

const EducationCard = ({
    index,
    title,
    std,
    organization,
    city,
    icon,
    iconBg,
    year,
    cpi,
    pr,
    courses,
}) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full"
        >
            <div className="relative w-full flex justify-center items-center flex-col gap-4">
                <img src={icon} alt={title} className="w-16 h-16 object-contain pb-2" />
                <h3 className="text-white text-[18px] font-bold text-center">
                    {title} <br />
                    <span className="text-white-50">{std ? `(${std})` : ""}</span>
                </h3>
                <div className="flex flex-col justify-center items-center gap-1">
                    <p className="mt-2 text-white-50 text-[16px] font-semibold">
                        {organization}
                    </p>
                    <small className="text-blue-500 text-[14px] font-medium">
                        {year}
                    </small>
                </div>

                <div className="flex flex-row justify-between items-center">
                    {
                        <>
                            <p className="text-white-50 text-[14px] font-medium">
                                {cpi ? "CPI :" : "Percentage :"} &nbsp;
                            </p>
                            <p className="text-white text-[14px] font-semibold">
                                {cpi || pr}
                            </p>
                        </>
                    }
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>From where I studied</p>
                    <h2 className={styles.sectionHeadText}>Education.</h2>
                </motion.div>
            </div>

            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-evenly items-center gap-7`}>
                {education.map((education, index) => (
                    <EducationCard key={education.title} index={index} {...education} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Education, "education");
