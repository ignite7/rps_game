// Game logic

// Utilities
import pcNames from "./PCNames.js";

export default class rpsGame {
  pcOptions = ["rock", "paper", "scissor"];

  constructor(userName, userOption) {
    this.userName = userName;
    this.userOption = userOption;
    return this.start();
  }

  start() {
    let randomPcOption = this.getPcOption();
    let pcName = this.getPcName();
    let result = this.rules(randomPcOption, pcName);
    return {
      pcName: pcName,
      pcOption: randomPcOption,
      userOption: this.userOption,
      result: `${result} has won!`,
    };
  }

  getPcName() {
    let idx = Math.floor(Math.random() * pcNames.length);
    return `${pcNames[idx]}`;
  }

  getPcOption() {
    let idx = Math.floor(Math.random() * this.pcOptions.length);
    return `${this.pcOptions[idx]}`;
  }

  rules(randomPcOption, pcName) {
    if (this.userOption === randomPcOption) {
      return "No one";
    }
    if (this.userOption === "rock") {
      if (randomPcOption === "paper") {
        return `${pcName}`;
      } else if (randomPcOption === "scissor") {
        return `${this.userName}`;
      }
    } else if (this.userOption === "paper") {
      if (randomPcOption === "rock") {
        return `${this.userName}`;
      } else if (randomPcOption === "scissor") {
        return `${pcName}`;
      }
    } else if (this.userOption === "scissor") {
      if (randomPcOption === "rock") {
        return `${pcName}`;
      } else if (randomPcOption === "paper") {
        return `${this.userName}`;
      }
    }
  }
}
