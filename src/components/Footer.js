//React
import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <p className="footer__text">
        Made with 🧡 by{" "}
        <a href="https://www.sergiovanberkel.com/" className="footer__link">
          Sergio van Berkel Acosta
        </a>
      </p>
    );
  }
}
