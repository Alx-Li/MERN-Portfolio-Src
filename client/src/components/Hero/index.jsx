import dynamic from "next/dynamic";
import classes from "./Hero.module.scss";
import TextScroll from "./TextScroll";
import FoldText from "./FoldText";
import { lato } from "../Fonts";
const LogoScene = dynamic(() => import("@/components/Logo/Scene.jsx"), {
  ssr: false,
});

export default function Hero({ text, logo = false }) {
  return (
    <div className={classes.heroContainer}>
      {logo && (
        <div className={classes.modelContainer}>
          <LogoScene />
        </div>
      )}
      <div className={classes.centerTextContainer}>
        <TextScroll text={text} />
        <div className={classes.chinaText}>桃李不言, 下自成蹊</div>
        <div className={`${lato.className} ${classes.desc}`}>
          A WHOLE LOTTA TEXT ABOUT WHO I AM AND WHAT I DO. A BRIEF INTRO ABOUT
          SUM SHT like idk fancy corpo bs and being all wiseman and
          (((o(*°▽°*)o)))
        </div>
      </div>
      <div className={classes.foldTextContainer}>
        <FoldText />
      </div>
    </div>
  );
}
