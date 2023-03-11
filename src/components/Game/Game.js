import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);

  function submitGuess(guess) {
    const nextGuessResults = [...guessResults, { guess, id: Math.random() }];
    setGuessResults(nextGuessResults);
  }
  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput submitGuess={submitGuess} />;
    </>
  );
}

export default Game;
