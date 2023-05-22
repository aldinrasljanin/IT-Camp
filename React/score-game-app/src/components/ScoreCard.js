import React from "react";
import "../App.css";

class ScoreCard extends React.Component {
  render() {
    return (
      <div className="score-card">
        <h1>{this.props.score}</h1>
        <p>{this.props.name}</p>
        <button
          onClick={(e) => {
            this.props.goal();
          }}
        >
          Goal!
        </button>
        <button
          onClick={(e) => {
            this.props.yellow();
          }}
        >
          Yellow!
        </button>
        <button
          onClick={(e) => {
            this.props.red();
          }}
        >
          Red!
        </button>
      </div>
    );
  }
}

export default ScoreCard;
