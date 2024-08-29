"use client";
import { useState, useEffect } from "react";
import classes from "./CustomCursor.module.scss";
import useMousePosition from "@/components/Utils/useMousePosition";
import { motion } from "framer-motion";
export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const updateMousePostition = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePostition);

    return () => [
      window.removeEventListener("mousemove", updateMousePostition),
    ];
  }, []);

  const size = 40;
  const variants = {
    default: {
      x: mousePosition.x - size / 2,
      y: mousePosition.y - size / 2,
    },
  };

  return (
    <motion.div
      className={classes.cursor}
      variants={variants}
      animate="default"
      transition={{
        type: "tween",
        ease: "backOut",
      }}
    />
  );
}
