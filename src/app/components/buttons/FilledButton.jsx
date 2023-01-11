import React from "react";

const FilledButton = ({ text }) => {
  return (
    <button className="button-filled">
      <a>{text}</a>
    </button>
  );
};

export default FilledButton;
