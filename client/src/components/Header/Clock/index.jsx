import React, { useState, useEffect, useRef } from "react";
export default function ClockTextReveal({
  velocity = 60,
  changeTo = "pst",
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
  const [time, setTime] = useState(new Date());
  const [displayText, setDisplayText] = useState(formatTime(new Date()));
  const intervalRef = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    startClock(); // Start the clock on mount
    return () => stopClock(); // Cleanup on unmount
  }, []);

  const startClock = () => {
    intervalRef.current = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      setDisplayText(formatTime(currentTime));
    }, 1000);
  };

  const stopClock = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

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
    stopClock(); // Stop the clock when hovered
    shuffleText(displayText, changeTo);
  };

  const handleMouseLeave = () => {
    startClock(); // Restart the clock when the mouse leaves
    shuffleText(displayText, formatTime(time));
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
