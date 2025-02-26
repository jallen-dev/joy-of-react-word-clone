import React, { useState } from "react";

function GuessInput({ submitGuess, status }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    submitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        disabled={status !== "running"}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
