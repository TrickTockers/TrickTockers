import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const advice = res.data.slip.advice;
        this.setState({ advice });
        console.log(res.data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
        </div>
        <button className="button" onClick= {this.fetchAdvice}>
          Give Me Advice !
        </button>
      </div>
    );
  }
}

export default App;
