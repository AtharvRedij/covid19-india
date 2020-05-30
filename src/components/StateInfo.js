import React from "react";
import StatePreview from "./StatePreview";
import "./StateInfo.css";

const StateInfo = (props) => {
  if (!props.active) {
    return <StatePreview {...props} />;
  } else {
    return (
      <div className="state-info-container">
        <StatePreview {...props} />
        <h1>Active</h1>
      </div>
    );
  }
};

export default StateInfo;
