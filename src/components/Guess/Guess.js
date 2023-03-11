import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const letters = guess ? guess.split("") : range(5).map((_) => "");

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}
export default Guess;
