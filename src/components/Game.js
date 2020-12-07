// React
import React from "react";

// Icons
import { GiStonePile, GiPaper, GiScissors } from "react-icons/gi";
import { AiOutlineLoading } from "react-icons/ai";

// Logic
import rpsGame from "../pages/Logic";

// Components
import TryAgainButton from "./TryAgain";
import StarsIcon from "./Stars";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pcName: "",
      pcOption: "",
      result: "",
      gameError: false,
      nextStep: false,
    };
  }

  componentDidMount() {
    this.infoGame = new rpsGame(this.props.userName, this.props.userOption);
    if (this.infoGame) {
      this.setState({
        pcName: this.infoGame.pcName,
        pcOption: this.infoGame.pcOption,
        result: this.infoGame.result,
      });
    } else {
      this.setState({ gameError: true });
    }
    this.sleep().then(() => {
      this.setState({ nextStep: true, gameError: false });
    });
  }

  sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  getIcon(icon) {
    if (icon === "rock") {
      return (
        <GiStonePile
          name="rock"
          title="rock"
          className="main__result-played-icon"
        />
      );
    } else if (icon === "paper") {
      return (
        <GiPaper
          name="paper"
          title="paper"
          className="main__result-played-icon"
        />
      );
    } else if (icon === "scissor") {
      return (
        <GiScissors
          name="scissor"
          title="scissor"
          className="main__result-played-icon"
        />
      );
    }
  }

  render() {
    if (this.state.gameError) {
      return (
        <h3 className="text-center">
          It has occured an error reload the page.
        </h3>
      );
    }

    let iconUser = this.getIcon(this.props.userOption);
    let iconPC = this.getIcon(this.state.pcOption);

    return (
      <div className="main__result">
        {this.state.nextStep ? (
          <React.Fragment>
            <StarsIcon
              result={this.state.result}
              userName={this.props.userName}
              pcName={this.state.pcName}
            />
            <div className="main__result-container">
              <div className="main__result-user">
                <h2>{this.props.userName}</h2>
                <div className="main__result-played-icon-user">{iconUser}</div>
              </div>
              <div className="main__result-vs">
                <h1 id="vs">Vs</h1>
              </div>
              <div className="main__result-pc">
                <h2>{this.state.pcName}</h2>
                <div className="main__result-played-icon-pc">{iconPC}</div>
              </div>
            </div>
            <TryAgainButton
              result={this.state.result}
              onNextStep={this.props.onNextStep}
            />
          </React.Fragment>
        ) : (
          <div className="main__result-loading">
            <h1>Who will win?</h1>
            <AiOutlineLoading
              name="load"
              className="main__result-loading-icon"
            />
          </div>
        )}
      </div>
    );
  }
}
