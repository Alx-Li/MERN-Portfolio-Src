/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import classes from "./Progress.module.scss";
import { whtpnyPX } from "@/components/Common/Fonts";
import { motion } from "framer-motion";
export default function Progress() {
  const [progress, setProgress] = useState(0);
  const increments = 100; // Number of increments
  const intervalTime = 1900 / increments; // Time between each increment

  useEffect(() => {
    const startProgress = () => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / increments;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, intervalTime);
    };

    const timeout = setTimeout(startProgress, 1200); // Delay before starting the progress

    return () => {
      clearInterval(timeout); // Cleanup timeout if the component unmounts
    };
  }, [intervalTime, increments]);

  return (
    <div className={`${whtpnyPX.className} ${classes.root}`}>
      <p>{progress}</p>

      <motion.div
        className={classes.progress}
        initial={{
          width: "0px",
        }}
        animate={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
