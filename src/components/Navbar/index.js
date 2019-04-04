import React from "react";
import "../../style.css";
import Score from "../Score";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

class Navbar extends React.Component {

    render() {
      return (
      <nav className="navbar">
        <ul>
          <li className="brand"><a href="/">Clicky Game</a></li>
          <Score/>
          {/* <Score 
            score={this.state.score} 
            highScore={this.state.highScore} 
            increment={this.handleIncrement}
          /> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;


