/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import TextReveal from "./TextReveal/TextReveal";
import classes from "./Header.module.scss";
import dynamic from "next/dynamic";
import { aexir } from "../Fonts/Fonts";
import { whtpny } from "@/components/Fonts/Fonts";
import { whtpnyPX } from "@/components/Fonts/Fonts";

const Clock = dynamic(() => import("./Clock/Clock.jsx"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className={classes.headerContainer}>
      <Clock className={`${classes.clock} ${whtpnyPX.className}`} />

      <div className={classes.linkContainer}>
        <TextReveal
          originalText={"home"}
          animateLeave
          className={`${classes.navLink} ${whtpny.className}`}
          velocity={60}
          href="/"
        />
        <TextReveal
          originalText={"contact"}
          changeTo={"WIP"}
          animateLeave
          className={`${classes.navLink} ${whtpny.className}`}
          velocity={50}
          href="/"
        />
        <TextReveal
          originalText={"about"}
          changeTo={"WIP"}
          animateLeave
          className={`${classes.navLink} ${whtpny.className}`}
          velocity={60}
          href="/"
        />
        <TextReveal
          originalText={"projects"}
          changeTo={"WIP"}
          animateLeave
          className={`${classes.navLink} ${whtpny.className}`}
          velocity={50}
          href="/"
        />
      </div>
      <p className={`${classes.accent} ${aexir.className}`}>///////</p>
    </header>
  );
}
