import React from "react";
export const LargeCard = ({ title, description, duration, timerange }) => {
  return (
    <div className="cardLarge">
      <h3 className="cardLarge-title">{title}</h3>
      <p className="cardLarge-description">{description}</p>
      <div className="cardLarge-timeframe">
        <p className="cardLarge-timeframe_years">{duration}</p>
        <p className="cardLarge-timeframe_timeline">{timerange}</p>
      </div>
    </div>
  );
};
