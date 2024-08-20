import dynamic from "next/dynamic";
import classes from "./WipHero.module.scss";
import TextScroll from "./TextScroll/TextScroll";
import FoldText from "./FoldText/FoldText";
const LogoScene = dynamic(() => import("@/components/Logo/Scene.jsx"), {
  ssr: false,
});

export default function Hero({ text }) {
  return (
    <div className={classes.heroContainer}>
      {/* <div className={classes.modelContainer}>
        <LogoScene />
      </div> */}
      <div className={classes.centerTextContainer}>
        <TextScroll text={text} />
      </div>
      <div className={classes.foldTextContainer}>
        <FoldText />
      </div>
    </div>
  );
}
