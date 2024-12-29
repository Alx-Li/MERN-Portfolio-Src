import React, { useRef, useEffect, useState } from "react";
import classes from "./Projects.module.scss";
import TextScrollv2 from "@/components/Common/TextScrollv2";
import { kimchi } from "@/components/Common/Fonts";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const rootRef = useRef(null);
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: rootRef });

  const [carouselWidth, setCarouselWidth] = useState(0);

  // Function to calculate the carousel width
  const calculateCarouselWidth = () => {
    if (carouselRef.current) {
      setCarouselWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  };

  // Update the carousel width on mount and window resize
  useEffect(() => {
    calculateCarouselWidth();

    // Add event listener for window resize
    window.addEventListener("resize", calculateCarouselWidth);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", calculateCarouselWidth);
  }, []);

  // Set the x transform range based on carouselWidth
  const x = useTransform(scrollYProgress, [0, 1], [0, -(carouselWidth + 40)]);

  return (
    <div className={classes.container} ref={rootRef}>
      <div className={classes.contentContainer}>
        <TextScrollv2
          direction={-1}
          scrollSpeedFactor={0.02}
          interactive
          className={`${classes.scroller} ${kimchi.className}`}
        >
          <span>project project </span>
          <span>project project </span>
          <span>project project </span>
          <span>project project </span>
        </TextScrollv2>

        <TextScrollv2
          scrollSpeedFactor={0.05}
          interactive
          className={`${classes.scroller} ${kimchi.className}`}
        >
          <span>experience experience </span>
          <span>experience experience </span>
          <span>experience experience </span>
          <span>experience experience </span>
        </TextScrollv2>

        <motion.div className={classes.cards} style={{ x }} ref={carouselRef}>
          {/* loop to render x amount */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={classes.cardItem}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {i}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
