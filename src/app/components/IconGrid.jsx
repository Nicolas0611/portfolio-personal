import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconsArray } from "../library/importIcons";

const IconGrid = () => {
  return (
    <div className="icongrid">
      {iconsArray.map((icon, index) => (
        <a href={icon.link} key={index}>
          <FontAwesomeIcon icon={icon.icon} />
        </a>
      ))}
    </div>
  );
};

export default IconGrid;
