import React from "react";

const OutlineButton = ({ state, label }) => {
  return (
    <button disabled={state} className="outline">
      {label}
    </button>
  );
};

export default OutlineButton;
