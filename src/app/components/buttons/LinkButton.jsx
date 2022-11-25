import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkButton = ({ text, style, styleBg }) => {
  return (
    <div className="link">
      <div className={`link-button ${style}`}>
        <a>{text}</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className={`link-underline ${styleBg}`}></div>
    </div>
  );
};

export default LinkButton;
