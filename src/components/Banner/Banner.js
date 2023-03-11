import React from "react";

function Banner({ status, answer, guesses }) {
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {guesses.length} {guesses.length > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (status === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
