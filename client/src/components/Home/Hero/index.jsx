import classes from "./Hero.module.scss";
import { lato, kimchi } from "@/components/Common/Fonts";
import LogoScene from "@/components/Logo/Scene.jsx";
import TextScrollv2 from "@/components/Common/TextScrollv2";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// https://blog.olivierlarose.com/tutorials/background-image-parallax
export default function Hero({ text, logo = false }) {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={container} className={classes.rootContainer}>
      <motion.div
        style={{ y, opacity, backgroundColor: "#eceae9" }}
        className={classes.heroContainer}
      >
        {logo && (
          <div className={classes.modelContainer}>
            <LogoScene />
          </div>
        )}
        <div className={classes.centerTextContainer}>
          <TextScrollv2
            baseVelocity={1}
            autoScroll
            className={`${classes.scroller} ${kimchi.className}`}
          >
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
          </TextScrollv2>

          <div className={classes.chinaText}>桃李不言, 下自成蹊</div>
          <div className={`${lato.className} ${classes.desc}`}>
            A WHOLE LOTTA TEXT ABOUT WHO I AM AND WHAT I DO. A BRIEF INTRO ABOUT
            SUM I like idk, still be figuring it out. (((o(*°▽°*)o)))
          </div>
        </div>
      </motion.div>
    </div>
  );
}
