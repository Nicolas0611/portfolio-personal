import React from "react";
import { productStackArray, techStackArray } from "../library/importIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ title, subTitle1, subTitle2 }) => {
  return (
    <div className="techSkill-section">
      <p className="tech-title text-center">{title}</p>
      <div className="tech-stack">
        <h3 className="tech-stack_title">{subTitle1}</h3>

        <div className="tech-stack_icons">
          {techStackArray.map((icon, index) => (
            <FontAwesomeIcon size="4x" key={index} icon={icon.icon} />
          ))}
        </div>

        <h3 className="tech-stack_title">{subTitle2}</h3>
        <div className="tech-stack_icons">
          {productStackArray.map((icon, index) => (
            <img key={index} src={icon.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
