import classes from "./TextScroll.module.scss";
import { useProgress } from "@react-three/drei";
import { kimchi } from "@/components/Fonts";

export default function TextScroll() {
  return (
    <>
      <div className={classes.base}>
        <h1 className={`${classes.animWrapper} ${kimchi.className}`}>
          <span>WORK.IN.PROGRESS//</span>
          <span>WORK.IN.PROGRESS//</span>
        </h1>
      </div>
    </>
  );
}
