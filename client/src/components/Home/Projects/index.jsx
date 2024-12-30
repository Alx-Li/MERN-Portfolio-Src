import React, { useRef, useEffect, useState } from "react";
import classes from "./Projects.module.scss";
import TextScrollv2 from "@/components/Common/TextScrollv2";
import { kimchi, lato, aexir, whtpny } from "@/components/Common/Fonts";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import TextReveal from "@/components/Common/TextReveal";

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

  // Apply a spring to smooth out the scroll progress
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  });

  const scrollBarProgress = useTransform(
    smoothScrollYProgress,
    [0, 1],
    ["1%", "100%"]
  );

  const handleScrollBarClick = (e) => {
    if (!rootRef.current) return;

    const rootTop =
      rootRef.current.getBoundingClientRect().top + window.scrollY;

    const rootEnd = rootRef.current.offsetHeight + rootTop - window.innerHeight;

    // Get the bounding rectangle of the scrollbar container
    const scrollBarContainer = e.currentTarget;
    const rect = scrollBarContainer.getBoundingClientRect();

    // Calculate the clicked position as a percentage
    const clickX = e.clientX - rect.left; // Click position relative to the container
    const scrollPercentage = clickX / rect.width;

    // Calculate the target scroll position
    console.log("rootEnd:", rootEnd);
    console.log("scrollPercentage:", scrollPercentage);

    // 100% == rootEnd
    // 0% == rootTop
    const targetY = rootTop + (rootEnd - rootTop) * scrollPercentage;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

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
              className={`${classes.cardItem} ${whtpny.className}`}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={classes.cardContent}>{i}</div>
            </motion.div>
          ))}
        </motion.div>
        <div className={classes.projectFooter}>
          <div className={classes.scrollContainer}>
            <div className={`${classes.accent} ${aexir.className}`}>///</div>
            <div
              className={classes.scrollBarContainer}
              onClick={handleScrollBarClick}
            >
              <motion.div
                className={classes.scrollBar}
                style={{ width: scrollBarProgress }}
              />
            </div>
          </div>
          <Link
            href="/projects"
            className={`${classes.link} ${lato.className}`}
            scroll={false}
            onClick={() => window.scrollTo(0, 0, { behavior: "smooth" })}
          >
            <TextReveal
              originalText={"READ MORE >"}
              changeTo={"(~˘▽˘)~ ･゜ﾟ･*☆"}
              animateLeave
              velocity={60}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
