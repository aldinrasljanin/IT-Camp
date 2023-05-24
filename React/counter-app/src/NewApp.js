import React from "react";
import "./App.css";

const App = (props) => {
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
};

export default App;
