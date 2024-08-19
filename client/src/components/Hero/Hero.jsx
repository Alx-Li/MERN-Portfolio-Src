import TextSample from "@/components/Temp/TextSample";
import dynamic from "next/dynamic";
import classes from "./Hero.module.scss";
import TextScroll from "./TextScroll/TextScroll";
import FoldText from "./FoldText/FoldText";
const LogoScene = dynamic(() => import("@/components/Logo/Scene.jsx"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.modelContainer}>
        <LogoScene />
      </div>
      <div className={classes.centerTextContainer}>
        <TextScroll />
      </div>
      <div className={classes.foldTextContainer}>
        <FoldText />
      </div>
    </div>
  );
}
