import React, { useState } from "react";

export default function TextReveal({
  velocity,
  originalText,
  changeTo,
  animateLeave = false,
  className,
  style,
  children,
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
    <p
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {displayText}
    </p>
  );
}
