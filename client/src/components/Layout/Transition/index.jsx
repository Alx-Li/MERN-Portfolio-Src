import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import classes from "./layout.module.scss";
import TextReveal from "../TextReveal";
import Progress from "../Progress";
const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/projects": "Projects",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Layout({ children }) {
  const router = useRouter();
  const delay = router.pathname == "/" ? 4 : 0.6;

  // setting window size since window is not exposed in server
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: { duration: 0.75, delay: delay, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: { top: "47.5%" },
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className={classes.curve}>
      <motion.div {...anim(text)} className={classes.route}>
        <TextReveal velocity={60} targetText={routes[router.pathname]} />
        {router.pathname === "/" && <Progress />}
      </motion.div>
      <div
        style={{ opacity: dimensions.width === null ? 1 : 0 }}
        className={classes.background}
      />
      {dimensions.width !== null && <SVG {...dimensions} delay={delay} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width, delay }) => {
  const initialPath = `
      M0 300 
      Q${width / 2} 0 ${width} 300
      L${width} ${height + 300}
      Q${width / 2} ${height + 600} 0 ${height + 300}
      L0 0
  `;

  const targetPath = `
      M0 300
      Q${width / 2} 0 ${width} 300
      L${width} ${height}
      Q${width / 2} ${height} 0 ${height}
      L0 0
  `;

  const curve = (initialPath, targetPath) => {
    return {
      initial: {
        d: initialPath,
      },
      enter: {
        d: targetPath,
        transition: { duration: 0.75, delay: delay, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    };
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: { duration: 0.75, delay: delay, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve(initialPath, targetPath))} fill="#1f1e1e" />
    </motion.svg>
  );
};
