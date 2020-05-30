import React, { Component } from "react";
import StateInfo from "./components/StateInfo";
import { fetchStateDetails, fetchDistrictDetails } from "./API";
import "./App.css";

class App extends Component {
  state = {
    statesData: null,
    districtsData: null,
    activeState: "TT",
  };

  async componentDidMount() {
    const statesData = await fetchStateDetails();
    const districtsData = await fetchDistrictDetails();

    this.setState({
      statesData,
      districtsData,
    });
  }

  handleStateClick = (statecode) => {
    this.setState({ activeState: statecode });
  };

  render() {
    const { statesData, districtsData, activeState } = this.state;

    if (!(statesData || districtsData)) return <h1>Loading...</h1>;

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
