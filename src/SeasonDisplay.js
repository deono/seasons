import "./SeasonDisplay.css";
import React from "react";

// config object
const seasonConfig = {
  summer: {
    seasonText: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    seasonText: "Brrr, it's chilly",
    iconName: "snowflake"
  }
};

// helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// React functional component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{seasonText}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
