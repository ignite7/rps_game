// React
import React from "react";

// Icons
import { GiStonePile, GiPaper, GiScissors } from "react-icons/gi";

export default function Options(props) {
  return (
    <div className="main__options">
      <div className="main__options-rock">
        <button value="rock" name="rock" onClick={props.onClick}>
          <h2>I'm stronger</h2>
          <GiStonePile
            title="rock"
            name="rock"
            className="main__options-icon"
          />
        </button>
      </div>
      <div className="main__options-paper">
        <button value="paper" name="paper" onClick={props.onClick}>
          <h2>I'm just paper</h2>
          <GiPaper title="paper" name="rock" className="main__options-icon" />
        </button>
      </div>
      <div className="main__options-scissor">
        <button value="scissor" name="scissor" onClick={props.onClick}>
          <h2>It isn't obvious?</h2>
          <GiScissors
            title="scissors"
            name="rock"
            className="main__options-icon"
          />
        </button>
      </div>
    </div>
  );
}
