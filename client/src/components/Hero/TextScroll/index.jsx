import classes from "./TextScroll.module.scss";
import { kimchi } from "@/components/Fonts";

export default function TextScroll({ text }) {
  return (
    <>
      <div className={classes.base}>
        <h1 className={`${classes.animWrapper} ${kimchi.className}`}>
          <span>{text}</span>
          <span>{text}</span>
        </h1>
      </div>
    </>
  );
}
