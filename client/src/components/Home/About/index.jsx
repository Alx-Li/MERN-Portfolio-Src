import React from "react";
import { lato, kimchi, whtpny, aexir } from "@/components/Common/Fonts";
import classes from "./About.module.scss";
import TextReveal from "@/components/Common/TextReveal";
import Link from "next/link";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <h2 className={`${classes.title} ${kimchi.className}`}>ABOUT ME</h2>
      <div className={`${classes.content} ${lato.className}`}>
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
      </div>
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
