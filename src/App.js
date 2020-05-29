import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    statesData: null,
    districtsData: null,
  };

  fetchStateDetails = () => {
    const url = "https://api.covid19india.org/data.json";

    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        this.setState({
          statesData: out.statewise,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  fetchDistrictDetails = () => {
    const url = "https://api.covid19india.org/state_district_wise.json";

    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        this.setState({
          districtsData: out,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  componentDidMount() {
    this.fetchStateDetails();
    this.fetchDistrictDetails();
  }

  render() {
    console.log(this.state);
    return <h1>This is the homepage</h1>;
  }
}

export default App;
