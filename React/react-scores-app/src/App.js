import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";

// const [state,setState] = useState({
//   homeScore: 0,
//   guestScore: 0,
// })

class App extends React.Component {
  state = {
    homeScore: 0,
    awayScore: 0,
    gameover: false,
  };

  componentDidMount() {
    console.log("DID MOUNT");
    // this.setState({ homeScore: 0, guestScore: 0 });
  }

  componentDidUpdate() {
    console.log("DID UPDATE");
    if (this.state.gameover === false) {
      // igra traje
      if (this.state.homeScore === 5) {
        console.log("Home is winner");
        this.setState({ gameover: true }); // prekini igru
      }
      if (this.state.awayScore === 5) {
        console.log("Guest is winner");
        this.setState({ gameover: true });
      }
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <h1 className="title">Score Game</h1>
        </div>

        <div className="scores-container">
          <ScoreCard
            name="Home"
            score={this.state.homeScore}
            goal={() => {
              if (this.state.gameover === false) {
                this.setState({ homeScore: this.state.homeScore + 1 });
              }
            }}
          />
          <ScoreCard
            name="Away"
            score={this.state.awayScore}
            goal={() => {
              if (this.state.gameover === false) {
                // igra traje
                this.setState({ awayScore: this.state.awayScore + 1 });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
