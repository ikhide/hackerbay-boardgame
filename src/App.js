import React, { Component } from "react";
import Game from "./Game/Game";
import Button from "./component/button";

class App extends Component {
  state = {
    start: false,
  };

  setStart = () => {
    this.setState({ start: !this.state.start });
  };

  render() {
    let { start } = this.state;
    return (
      <div className="App">
        {/* <button className={style}>{!start ? "Start Game" : "Stop"}</button> */}

        <Button
          onClick={this.setStart}
          text={!start ? "Start Game" : "Stop"}
          active={start}
        ></Button>
        {start && <Game endGame={() => this.setStart()} />}
      </div>
    );
  }
}

export default App;
