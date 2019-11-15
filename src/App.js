import React from "react";
import Die from "./components/Dice";
import "./App.css";
import { setState } from "expect/build/jestMatchersObject";

function randomInteger(low, high) {
  return Math.floor(Math.random() * high) + low + 1;
}

class App extends React.Component {
  state = {
    die1: 1,
    die2: 1
  };

  rollDice = () => {
    const die1 = randomInteger(1, 6);
    const die2 = randomInteger(1, 6);
    this.setState({
      die1,
      die2
    });
  };

  render() {
    return (
      <div className="App">
        <Die number={this.state.die1} />
        <Die number={this.state.die2} />
        <button onClick={this.rollDice}>Roll Dice</button>
      </div>
    );
  }
}

export default App;
