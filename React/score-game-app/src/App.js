import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";
class App extends React.Component {
  state = {
    scores: [],
    gameover: false,
    player: "",
  };

  homeScoreGoal() {
    const eventData = {
      player: this.state.player,
      team: "home",
      event: "goal",
    };
    const newScores = this.state.scores;
    newScores.push(eventData);
    this.setState({ scores: newScores, player: "" });
  }

  render() {
    return (
      <div className="app">
        <div className="scores-container">
          <ScoreCard name="Home" score={this.state.homeScore} goal={() => {}} />
          <ScoreCard name="Away" score={this.state.awayScore} goal={() => {}} />
        </div>
        inpu
      </div>
    );
  }
}

export default App;
