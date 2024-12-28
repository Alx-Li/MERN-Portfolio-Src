"use client";
import styles from "./TextSample.module.scss";
import { useProgress } from "@react-three/drei";
import {
  lato,
  aexir,
  akira,
  kimchi,
  whtpny,
  whtpnyPX,
  whtpnyLCD,
} from "@/components/Common/Fonts";

export default function TextSample() {
  const { progress } = useProgress();

  return (
    <>
      {progress == 100 && (
        <div className={styles.base}>
          <div className={lato.className} style={{ fontWeight: "300" }}>
            THIS IS LATO
          </div>
          <div className={aexir.className}>This is Aexir font</div>
          <div className={akira.className}>This is Akira Expanded font</div>
          <div className={kimchi.className}>This is Kimchi font</div>
          <div className={whtpny.className}>This is WHTPNY font</div>
          <div className={whtpnyPX.className}>This is WHTPNY PX font</div>
          <div className={whtpnyLCD.className}>This is WHTPNY LCD font</div>
        </div>
      )}
    </>
  );
}
