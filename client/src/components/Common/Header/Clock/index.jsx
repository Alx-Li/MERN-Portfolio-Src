import React, { useState, useEffect, useRef } from "react";
export default function ClockTextReveal({
  velocity = 60,
  changeTo = "YVR",
  className,
  style,
}) {
  const formatTime = (date) => {
    const vancouverTime = new Date(
      date.toLocaleString("en-US", { timeZone: "America/Vancouver" })
    );
    let hours = vancouverTime.getHours();
    let minutes = vancouverTime.getMinutes();

    // Add leading zeros to minutes
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  };

  const time = useRef(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      time.current = new Date();
      const vancouverTime = new Date(
        time.current.toLocaleString("en-US", { timeZone: "America/Vancouver" })
      );
      let hours = vancouverTime.getHours();
      let minutes = vancouverTime.getMinutes();

      // Add leading zeros to minutes
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      // console.log(`${hours}:${minutes}`);
      setFormattedTime(`${hours}:${minutes}`);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const [formattedTime, setFormattedTime] = useState(formatTime(time.current));
  const [displayText, setDisplayText] = useState(formatTime(time.current));

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
    shuffleText(displayText, changeTo);
  };

  const handleMouseLeave = () => {
    shuffleText(displayText, formattedTime);
  };

  return (
    <p
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </p>
  );
}
