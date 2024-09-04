import React from "react";
import classes from "./PlsDesktop.module.scss";
import { lato } from "../Fonts";
export default function PlsDesktop() {
  return (
    <div className={`${classes.root} ${lato.className}`}>
      <div className={classes.text}>
        <h1>
          im still working on it, please view this site on a larger device or
          window
        </h1>
        <br />
        <br />

        <p>人(_ _*)</p>
        <br />
        <br />
        <p>
          I promise its really cool <br />- Alx
        </p>
      </div>
    </div>
  );
}
