import React from "react";
import Confetti from "react-confetti";

const ConfettiEffect = ({ width, height, x, y, run }) => {
  if (!run) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: y,
        left: x,
        width: "100%",
        height: "100%",

        zIndex: -1,
        color: "transparent",
      }}
    >
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        wind={0.1}
        confettiSource={{ x: 0, y: 0, w: width, h: height }}
      />
    </div>
  );
};

export default ConfettiEffect;
