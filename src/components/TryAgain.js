//React
import React from "react";

// Icons
import { MdReplay } from "react-icons/md";

export default function TryAgainButton(props) {
  return (
    <div className="main__result-try">
      <h1>{props.result}</h1>
      <button onClick={props.onNextStep} value="false">
        <MdReplay
          name="try-again"
          title="Try again"
          className="main__result-try-icon"
        />
      </button>
    </div>
  );
}
