import React, { useState, useEffect } from "react";
import { whtpny } from "@/components/Fonts";
import classes from "./TextReveal.module.scss";
export default function TextReveal({ velocity, targetText }) {
  const randomLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  const generateRandomString = (length) => {
    return Array.from(
      { length },
      () => randomLetters[Math.floor(Math.random() * randomLetters.length)]
    ).join("");
  };

  const [displayText, setDisplayText] = useState(targetText);

  const shuffle = (o) => {
    for (
      let j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  const shuffleText = (elementText, originalText) => {
    let elementTextArray = [];
    let randomText = [];

    for (let i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt(i));
    }

    const repeatShuffle = (times, index) => {
      if (index === times) {
        setDisplayText(originalText);
        return;
      }

      setTimeout(() => {
        randomText = shuffle([...elementTextArray]);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        setDisplayText(randomText);
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(elementText.length, 0);
  };

  useEffect(() => {
    shuffleText(targetText, targetText);
  }, []); // Empty dependency array to trigger on component mount
  // some reason keeps the original text????
  return <p className={`${classes.text} ${whtpny.className}`}>{displayText}</p>;
}
