import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring configuration for the trailing aura
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(-100, springConfig);
  const cursorYSpring = useSpring(-100, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorXSpring.set(e.clientX);
      cursorYSpring.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.cursor-pointer') ||
        e.target.closest('.group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorXSpring, cursorYSpring]);

  return (
    <>
      {/* Trailing Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] opacity-40 blur-[15px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 100 : 50,
          height: isHovering ? 100 : 50,
          backgroundColor: isHovering ? '#D9ACF2' : '#A661DF',
        }}
      />
      
      {/* Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 12 : 6,
          height: isHovering ? 12 : 6,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
