import classes from "./Hero.module.scss";
// import TextScroll from "./TextScroll";
// import FoldText from "../Accents/FoldText";
import { lato } from "../Fonts";
import LogoScene from "@/components/Logo/Scene.jsx";
import TextScrollv2 from "./TextScrollv2";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// https://blog.olivierlarose.com/tutorials/background-image-parallax
export default function Hero({ text, logo = false }) {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div style={{ y }} className={classes.heroContainer}>
        {logo && (
          <div className={classes.modelContainer}>
            <LogoScene />
          </div>
        )}
        <div className={classes.centerTextContainer}>
          <TextScrollv2 baseVelocity={1} text={text} />

          <div className={classes.chinaText}>桃李不言, 下自成蹊</div>
          <div className={`${lato.className} ${classes.desc}`}>
            A WHOLE LOTTA TEXT ABOUT WHO I AM AND WHAT I DO. A BRIEF INTRO ABOUT
            SUM SHT like idk fancy corpo bs and being all wiseman and
            (((o(*°▽°*)o)))
          </div>
        </div>
        {/* <div className={classes.foldTextContainer}>
          <FoldText />
        </div> */}
      </motion.div>
    </div>
  );
}
