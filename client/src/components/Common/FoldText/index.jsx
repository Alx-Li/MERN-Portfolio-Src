/* eslint-disable react/jsx-no-comment-textnodes */
import classes from "./FoldText.module.scss";
import { aexir, barcode, lato, whtpny } from "@/components/Common/Fonts";

export default function FoldText() {
  return (
    <>
      <div className={classes.textContainer}>
        <div className={classes.statusTextContainer}>
          <p className={`${classes.accent} ${aexir.className}`}>
            /////////////
          </p>
          <p className={`${classes.statusText} ${lato.className}`}>
            WORK IN PROGRESS <br />+ v1.0.0b
          </p>
        </div>
        <h2 className={`${classes.centerText} ${whtpny.className}`}>ALXXLI</h2>

        <p className={`${classes.barcode} ${barcode.className}`}>
          seoisoverrated
        </p>
      </div>
    </>
  );
}
