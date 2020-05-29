import React from "react";
import StatePreview from "./StatePreview";

const StateInfo = (props) => {
  if (!props.active) {
    return <StatePreview {...props} />;
  } else {
    return (
      <div>
        <StatePreview {...props} />
        <h1>Active</h1>
      </div>
    );
  }
};

export default StateInfo;
