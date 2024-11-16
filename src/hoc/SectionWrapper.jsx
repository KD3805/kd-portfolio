import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher Order Component (HOC) that wraps other components with animation and styling
// Takes a Component and an idName as parameters
const SectionWrapper = (Component, idName) =>
    // Returns a new component with enhanced functionality
    function HOC() {
        return (
            // AnimatePresence enables exit animations and waits for them to complete
            <AnimatePresence mode="wait">
                {/* motion.section adds animation capabilities to the section element */}
                <motion.section
                    // Apply stagger animation to child elements
                    variants={staggerContainer()}
                    // Start with hidden state
                    initial="hidden"
                    // Animate to show state when in view
                    whileInView="show"
                    // Return to hidden state when exiting
                    exit="hidden"
                    // Configure viewport options:
                    // once: false - animation triggers every time element enters viewport
                    // amount: 0.25 - triggers when 25% of element is visible
                    viewport={{ once: false, amount: 0.25 }}
                    // Apply styling classes for padding, width, positioning
                    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                >
                    {/* Create an anchor point for navigation with empty space */}
                    <span className="hash-span" id={idName}>
                        &nbsp;
                    </span>
                    {/* Render the wrapped component */}
                    <Component />
                </motion.section>
            </AnimatePresence>
        );
    };

export default SectionWrapper;
