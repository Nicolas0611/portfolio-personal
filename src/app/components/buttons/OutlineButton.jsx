import React from "react";

const OutlineButton = ({ state, label }) => {
  return (
    <button disabled={state} className="outline">
      {state ? "No more results found" : label}
    </button>
  );
};

export default OutlineButton;
