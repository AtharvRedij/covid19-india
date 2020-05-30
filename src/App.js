import React, { Component } from "react";
import StateInfo from "./components/StateInfo";
import "./App.css";

class App extends Component {
  state = {
    statesData: null,
    districtsData: null,
    activeState: "TT",
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

  handleStateClick = (statecode) => {
    this.setState({ activeState: statecode });
  };

  render() {
    const { statesData, districtsData, activeState } = this.state;

    if (statesData === null || districtsData === null) return null;

    return (
      <div className="app-container">
        {statesData.map((state) => (
          <StateInfo
            key={state.statecode}
            stateName={state.state}
            stateCode={state.statecode}
            activeCases={state.active}
            confirmedCases={state.confirmed}
            recoveredCases={state.recovered}
            deathsCases={state.deaths}
            districtsInfo={
              state.state === "Total" || state.state === "State Unassigned"
                ? null
                : districtsData[state.state].districtData
            }
            active={activeState === state.statecode}
            onStateClick={this.handleStateClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
