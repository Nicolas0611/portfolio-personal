import React from "react";
import { iconsArray } from "../library/importIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImage from "../../assets/img/footer-img.png";
const Footer = ({ title, text, mail, label }) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <p className="footer-title">{title}</p>
            <p className="footer-text">{text}</p>
            <p className="footer-mail">{mail}</p>

            <div className="footer-socials">
              {iconsArray.map((icon, index) => (
                <a href={icon.link} key={index}>
                  <FontAwesomeIcon icon={icon.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-image">
            <img src={footerImage} />
          </div>
        </div>
        <label className="footer-label"> {label}</label>
      </div>
    </div>
  );
};

export default Footer;
