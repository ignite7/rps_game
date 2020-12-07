// React
import React from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <React.Fragment>
      <header className="header">
        <Header />
      </header>
      <main>{props.children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </React.Fragment>
  );
}
