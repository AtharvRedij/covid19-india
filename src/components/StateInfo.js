import React from "react";
import StatePreview from "./StatePreview";
import "./StateInfo.css";
import { get_url } from "./../DATA";

const StateInfo = (props) => {
  if (!props.active) {
    return <StatePreview {...props} />;
  } else {
    return (
      <div className="state-info-container">
        <StatePreview {...props} />
        <h1>TABLE</h1>
        <img src={get_url(props.stateCode)} alt={props.stateName} />
      </div>
    );
  }
};

export default StateInfo;
