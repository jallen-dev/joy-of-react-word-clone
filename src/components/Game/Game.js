import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const status = checkStatus();

  const paddedGuesses = [
    ...guesses,
    ...range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((_) => ""),
  ];

  function submitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }

  function checkStatus() {
    if (guesses.includes(answer)) {
      return "won";
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return "lost";
    } else {
      return "running";
    }
  }

  return (
    <>
      <GuessResults guesses={paddedGuesses} answer={answer} />
      <Banner status={status} answer={answer} guesses={guesses} />
      <GuessInput submitGuess={submitGuess} status={status} />
    </>
  );
}

export default Game;
