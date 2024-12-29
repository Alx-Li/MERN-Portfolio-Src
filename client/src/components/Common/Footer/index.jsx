import React from "react";
import classes from "./Footer.module.scss";
import { lato, whtpny } from "../Fonts";
import Link from "next/link";
import Image from "next/image";

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2717171/svg"
    id="Layer_2"
    data-name="Layer 2"
    viewBox="0 0 392.5 306.74"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1,.cls-2{stroke-miterlimit:10}.cls-1,.cls-2,.cls-4{fill:none;stroke:#717171;stroke-linecap:round}.cls-1,.cls-4{stroke-width:14px}.cls-2{stroke-width:12px}.cls-4{stroke-linejoin:round}"
        }
      </style>
    </defs>
    <g id="Layer_1-2" data-name="Layer 1">
      <path d="M182.5 88.78v-78l-175 78" className="cls-2" />
      <path d="M182.5 88.78v-78l-175 78" className="cls-1" />
      <path d="M208.5 8.28v80.5h26" className="cls-2" />
      <path d="M208.5 8.28v80.5h26" className="cls-1" />
      <path
        d="M97.5 48.78h65"
        style={{
          strokeWidth: 12,
          fill: "none",
          stroke: "#717171",
          strokeMiterlimit: 10,
        }}
      />
      <path
        d="M97.5 48.78h65m32.5 56.5v47m190-35H7m184 4c-72.32 43.45-180.69 56.05-184 56m193-56c72.35 43.29 182.02 56.04 185 56"
        className="cls-1"
      />
      <path
        d="M133 171.28h114.8c2.46 0 3.21 3.33.99 4.39L195 201.28"
        className="cls-4"
      />
      <path d="m188 196.28 26 17s17.5 31.5-18 81l-9-14" className="cls-1" />
      <path d="M130.5 221.78h254" className="cls-4" />
      <path d="M272.5 88.78h113" className="cls-1" />
      <circle cx={253.5} cy={88.78} r={7} fill="#717171" />
      <circle cx={111.5} cy={221.78} r={7} fill="#717171" />
      <path d="M28.5 222.02h45" className="cls-1" />
      <circle cx={92.5} cy={221.78} r={7} fill="#717171" />
      <circle cx={9.5} cy={221.78} r={7} fill="#717171" />
    </g>
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
);

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
  </svg>
);
// https://blog.olivierlarose.com/tutorials/sticky-footer
export default function Footer() {
  return (
    <div className={classes.rootContainer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerContent}>
          <div className={classes.top}>
            <div className={classes.logoNavContainer}>
              <Logo className={classes.logo} />
              <div className={`${lato.className} ${classes.nav}`}>
                <Link
                  href="/"
                  className={classes.navLink}
                  onClick={() => {
                    window.scrollTo(0, 0, { behavior: "smooth" });
                  }}
                  scroll={false}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={classes.navLink}
                  onClick={() => {
                    window.scrollTo(0, 0, { behavior: "smooth" });
                  }}
                  scroll={false}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className={classes.navLink}
                  onClick={() => {
                    window.scrollTo(0, 0, { behavior: "smooth" });
                  }}
                  scroll={false}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className={classes.navLink}
                  onClick={() => {
                    window.scrollTo(0, 0, { behavior: "smooth" });
                  }}
                  scroll={false}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className={classes.socialsContainer}>
              <Link
                className={classes.social}
                href={"https://github.com/Alx-Li"}
                target="_blank"
              >
                <Github className={classes.icon} />
              </Link>
              <Link
                className={classes.social}
                href={"https://www.linkedin.com/in/alx-li/"}
                target="_blank"
              >
                <Linkedin className={classes.icon} />
              </Link>
            </div>
          </div>
          <div className={classes.bottom}>
            <p className={`${lato.className} ${classes.footerText}`}>
              + v1.0.0b |{" "}
              <Link
                href="https://github.com/Alx-Li/Portfolio"
                className={classes.footerLink}
                target="_blank"
              >
                github repository
              </Link>{" "}
              | Designed and developed by Alex Li
            </p>
            <h4 className={`${whtpny.className} ${classes.displayText}`}>
              ALEXXLI
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
