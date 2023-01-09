import React from "react";

const Selector = ({ startFiltering, label, options }) => {
  return (
    <div className="selector">
      <label className="selector-label" htmlFor="projects">
        {label}
      </label>

      <select
        onChange={(e) => {
          startFiltering(e.target.value);
        }}
        name="projects"
        id="projects"
        className="selector-dropdown"
      >
        {options.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
