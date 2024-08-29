import { useState, useEffect } from "react";

// https://www.youtube.com/watch?v=momF_D4odCM
// https://www.youtube.com/watch?v=nr3U-RpaQuM&t
export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const updateMousePostition = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePostition);

    return () => [
      window.removeEventListener("mousemove", updateMousePostition),
    ];
  }, []);

  return mousePosition;
}
