import React from "react";

class LogoComponent extends React.Component {
  state = { name: "Aldin", logoWidth: "80px" };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <img
          src={this.props.logo}
          className="App-logo"
          alt="logo"
          style={{ width: this.state.logoWidth }}
        />
        {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "Kenan", logoWidth: "150px" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default LogoComponent;
