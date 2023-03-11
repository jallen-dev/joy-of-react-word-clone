import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const letters = guess
    ? checkGuess(guess, answer)
    : range(5).map((_) => ({ letter: "", status: "" }));

  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}
export default Guess;
