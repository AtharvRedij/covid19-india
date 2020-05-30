import React from "react";
import StatePreview from "./StatePreview";
import "./StateInfo.css";
import { get_url } from "./../DATA";
import DistrictsTable from "./DistrictsTable";

const StateInfo = (props) => {
  if (props.districtsInfo === null || !props.active) {
    return <StatePreview {...props} />;
  } else {
    return (
      <div className="state-info-container">
        <StatePreview {...props} />
        <div className="state-information">
          <DistrictsTable districts={props.districtsInfo} />
          <img src={get_url(props.stateCode)} alt={props.stateName} />
        </div>
      </div>
    );
  }
};

export default StateInfo;
