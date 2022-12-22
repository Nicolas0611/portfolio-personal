import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkButton = ({ href, text, style, styleBg, icon }) => {
  return (
    <div className="link">
      <div className={`link-button ${style}`}>
        <a className={style} href={href}>
          {text}
        </a>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={`link-underline ${styleBg}`}></div>
    </div>
  );
};

export default LinkButton;
