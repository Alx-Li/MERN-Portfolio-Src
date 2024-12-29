import React from "react";
import { lato, kimchi } from "@/components/Common/Fonts";
import classes from "./About.module.scss";
import TextReveal from "@/components/Common/TextReveal";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <motion.h2
        className={`${classes.title} ${kimchi.className}`}
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0, threshold: 0.99 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ABOUT ME
      </motion.h2>
      <motion.div
        className={`${classes.content} ${lato.className}`}
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0, threshold: 0.99 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={classes.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.{" "}
        </div>
        <div className={classes.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.{" "}
        </div>
      </motion.div>
      <Link
        href="/about"
        className={`${classes.link} ${lato.className}`}
        scroll={false}
        onClick={() => window.scrollTo(0, 0, { behavior: "smooth" })}
      >
        <TextReveal
          originalText={"READ MORE >"}
          changeTo={"(^０^)ノ"}
          animateLeave
          velocity={60}
        />
      </Link>
    </div>
  );
};

export default About;
