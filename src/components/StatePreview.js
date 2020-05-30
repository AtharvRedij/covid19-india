import React from "react";
import "./StatePreview.css";

const StatePreview = ({
  stateName,
  stateCode,
  confirmedCases,
  activeCases,
  recoveredCases,
  deathsCases,
  active,
  onStateClick,
}) => {
  return (
    <div
      className="state-preview-container"
      onClick={() => onStateClick(stateCode)}
    >
      <div className="state-preview-state-name">{stateName}</div>
      <div className="state-preview-info">
        <div className="state-preview-confirmed-cases">
          Confirmed <br /> {confirmedCases}
        </div>
        <div className="state-preview-active-cases">
          Active <br /> {activeCases}
        </div>
        <div className="state-preview-recovered-cases">
          Recovered <br /> {recoveredCases}
        </div>
        <div className="state-preview-deaths-cases">
          Deaths <br /> {deathsCases}
        </div>
      </div>
    </div>
  );
};

export default StatePreview;
