// src/CanvasComponent.js

import React, { useEffect, useRef } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const characters = [
    "ζ",
    "δ",
    "μ",
    "τ",
    "Ξ",
    "Ě",
    "ɖ",
    "ɗ",
    "Ę",
    "ɚ",
    "ɜ",
    "ĕ",
    "Ġ",
    "ɣ",
    "ɤ",
    "ĥ",
    "ʯ",
    "Ĳ",
    "Ï",
    "ì",
    "Ĵ",
    "ʞ",
    "ķ",
    "ŉ",
    "ɯ",
    "ɳ",
    "ʠ",
    "Š",
    "ʆ",
    "Ŧ",
    "ʧ",
    "þ",
    "Ů",
    "ʉ",
    "Ũ",
    "ż",
    "ʓ",
    "ʎ",
    "ʐ",
    "ʭ",
    "ʆ",
  ];
  let currentIndex = 0;
  let currentY = 40;

  useEffect(() => {
    const canvas = canvasRef.current;
    //@ts-expect-error
    const ctx = canvas.getContext("2d");

    const drawLetter = () => {
      console.log("use");
      // Draw the current letter at currentY position
      ctx.fillText(characters[currentIndex], 100, currentY);

      ctx.font = "40px serif";
      ctx.fillStyle = "#e22d";
      // Move to the next letter and update Y position
      currentIndex++;
      currentY += 40;

      // Reset index and Y position if all letters have been drawn
      if (currentIndex >= characters.length) {
        currentIndex = 0;
        currentY = 10;
      }
    };

    // Draw the first letter immediately
    drawLetter();

    // Set up interval to draw subsequent letters
    const intervalId = setInterval(drawLetter, 100);

    // Clean up
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default CanvasComponent;
