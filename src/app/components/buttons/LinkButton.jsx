import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkButton = ({ text }) => {
  return (
    <div className="link">
      <div className="link-button">
        <a>{text}</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="link-underline"></div>
    </div>
  );
};

export default LinkButton;
