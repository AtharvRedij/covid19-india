import React from "react";
import StatePreview from "./StatePreview";
import DistrictsTable from "./DistrictsTable";
import { getStateImageUrl } from "../API";
import "./StateInfo.css";

const StateInfo = (props) => {
  if (props.districtsInfo === null || !props.active) {
    return <StatePreview {...props} />;
  } else {
    return (
      <div className="state-info-container">
        <StatePreview {...props} />
        <div className="state-information">
          <DistrictsTable districts={props.districtsInfo} />
          <img src={getStateImageUrl(props.stateCode)} alt={props.stateName} />
        </div>
      </div>
    );
  }
};

export default StateInfo;
