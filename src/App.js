import React, { Component } from "react";
import "./App.css";
import StatePreview from "./components/StatePreview";

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
    const { statesData } = this.state;

    if (statesData === null) return null;

    return (
      <div className="container">
        {statesData.map((state) => (
          <StatePreview
            key={state.statecode}
            stateName={state.state}
            active={state.active}
            confirmed={state.confirmed}
            recovered={state.recovered}
            deaths={state.deaths}
          />
        ))}
      </div>
    );
  }
}

export default App;
