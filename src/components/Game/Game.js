import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const paddedGuesses = [
    ...guesses,
    ...range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((_) => ""),
  ];

  function submitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={paddedGuesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
