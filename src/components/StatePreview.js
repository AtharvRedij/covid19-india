import React from "react";
import "./StatePreview.css";

const StatePreview = ({ stateName, active, confirmed, recovered, deaths }) => {
  return (
    <div className="state-preview-container">
      <div className="state-preview-state-name">{stateName}</div>
      <div className="state-preview-info">
        <div className="state-preview-confirmed-cases">
          Confirmed <br /> {confirmed}
        </div>
        <div className="state-preview-active-cases">
          Active <br /> {active}
        </div>
        <div className="state-preview-recovered-cases">
          Recovered <br /> {recovered}
        </div>
        <div className="state-preview-deaths-cases">
          Deaths <br /> {deaths}
        </div>
      </div>
    </div>
  );
};

export default StatePreview;
