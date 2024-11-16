import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ textSequence }) => {
  const [text, setText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [sequenceIndex, setSequenceIndex] = useState(0);

//   const textSequence = ["Hi there", "Good morning"];
  const typingSpeed = 100; // milliseconds per character while typing
  const erasingSpeed = 50;  // milliseconds per character while erasing
  const delayBetweenActions = 1000; // pause between typing and erasing actions

  useEffect(() => {
    let timeout;

    if (!isErasing) {
      // Typing
      if (charIndex < textSequence[sequenceIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + textSequence[sequenceIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsErasing(true), delayBetweenActions);
      }
    } else {
      // Erasing
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsErasing(false);
          setSequenceIndex((prev) => (prev + 1) % textSequence.length);
        }, delayBetweenActions);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, sequenceIndex]);

  return (
    <div>
      <span>{text}</span>
      <span style={styles.cursor}>|</span>
    </div>
  );
};

const styles = {
  text: {
    fontSize: '1.5em',
  },
  cursor: {
    fontSize: '1.5em',
    animation: 'blink 0.75s step-end infinite',
  },
};

export default TypingAnimation;
