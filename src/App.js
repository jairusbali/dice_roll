import React from "react";
import Die from "./components/Dice";

import "./App.css";
import "./Dice.css";

const shakeDuration = 1800;
function randomInteger(low, high) {
  return Math.floor(Math.random() * high) + low + 1;
}

class App extends React.Component {
  state = {
    die1: 1,
    die2: 1,
    shake: false
  };

  rollDice = () => {
    const die1 = randomInteger(1, 6);
    const die2 = randomInteger(1, 6);
    this.setState({
      die1,
      die2,
      shake: true
    });

    setTimeout(() => {
      this.setState({ shake: false });
    }, shakeDuration);
  };

  render() {
    return (
      <div className="App">
        <div className="Dice">
          <Die number={this.state.die1} shake={this.state.shake} />
          <Die number={this.state.die2} shake={this.state.shake} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.shake}>
          Roll Dice
        </button>
      </div>
    );
  }
}

export default App;
