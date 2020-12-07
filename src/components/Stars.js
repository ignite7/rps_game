// React
import React from "react";

// Icons
import { GiStaryu } from "react-icons/gi";
import { RiEmotionSadLine } from "react-icons/ri";

export default function StarsIcon(props) {
  if (props.result.includes(`${props.userName}`)) {
    return (
      <div className="main__result-stars">
        <GiStaryu name="star-1" title="star" className="main__result-icon" />
        <GiStaryu name="star-2" title="star" className="main__result-icon" />
        <GiStaryu name="star-3" title="star" className="main__result-icon" />
      </div>
    );
  } else if (props.result.includes(`${props.pcName}`)) {
    return (
      <div className="main__result-stars">
        <RiEmotionSadLine
          name="sad"
          title="sad face"
          className="main__result-icon"
        />
      </div>
    );
  } else {
    return (
      <div className="main__result-stars">
        <GiStaryu name="star-1" title="star" className="main__result-icon" />
      </div>
    );
  }
}
