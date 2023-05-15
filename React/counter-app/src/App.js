import React from "react";
import "./App.css";

class App extends React.Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>{this.state.counter}</h1>
          <div className="button-wrapper">
            <div className="count-button" onClick={this.incrementCounter}>
              <p>+</p>
            </div>
            <div className="reset-button" onClick={this.resetCounter}>
              <p>Reset</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
