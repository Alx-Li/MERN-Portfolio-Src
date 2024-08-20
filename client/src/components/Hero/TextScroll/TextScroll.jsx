import classes from "./TextScroll.module.scss";
import { useProgress } from "@react-three/drei";
import { kimchi } from "@/components/Fonts";

export default function TextScroll() {
  const { progress } = useProgress();

  return (
    <>
      {progress == 100 && (
        <div className={classes.base}>
          <h1 className={`${classes.animWrapper} ${kimchi.className}`}>
            <span>catchphrase</span>
            <span>catchphrase</span>
            <span>catchphrase</span>
            <span>catchphrase</span>
          </h1>
        </div>
      )}
    </>
  );
}
