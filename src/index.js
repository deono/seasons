import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor function
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }

  // Babel will compile this abbreviated line into
  // the constructor function above
  state = { lat: null, errorMessage: "" };

  // Lifecycle methods
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // componentDidUpdate() {
  //   console.log("My component was just updated.");
  // }

  // React requires a render() method
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
