// React
import React from "react";

// Components
import Options from "../components/Options";
import Form from "../components/Form";
import Game from "../components/Game";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userOption: "",
      error: false,
      nextStep: false,
    };
  }

  handleClick = (e) => {
    if (this.state.userName) {
      if (e.currentTarget.value === "rock") {
        this.setState({ userOption: "rock" });
      } else if (e.currentTarget.value === "paper") {
        this.setState({ userOption: "paper" });
      } else if (e.currentTarget.value === "scissor") {
        this.setState({ userOption: "scissor" });
      }
      this.setState({ nextStep: true, homeError: false });
    } else {
      this.setState({ homeError: true });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleNextStep = (e) => {
    if (e.currentTarget.value === "false") {
      this.setState({ nextStep: false });
    } else {
      this.setState({ nextStep: true });
    }
  };

  render() {
    if (this.state.nextStep) {
      return (
        <Game
          userName={this.state.userName}
          userOption={this.state.userOption}
          onNextStep={this.handleNextStep}
        />
      );
    } else {
      return (
        <React.Fragment>
          <Options onClick={this.handleClick} />
          <Form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            homeError={this.state.homeError}
            userName={this.state.userName}
          />
        </React.Fragment>
      );
    }
  }
}
