import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function TextReveal({
  velocity,
  originalText,
  changeTo,
  animateLeave = false,
  href,
  className,
  style,
}) {
  const [displayText, setDisplayText] = useState(originalText);

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

  const handleMouseEnter = () => {
    if (changeTo) shuffleText(displayText, changeTo);
    else shuffleText(displayText, originalText);
  };

  const handleMouseLeave = () => {
    if (animateLeave) shuffleText(displayText, originalText);
    else setDisplayText(originalText);
  };

  return (
    <Link
      href={href}
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </Link>
  );
}
