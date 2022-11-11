import React from "react";
import { iconsArray } from "../library/importIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImage from "../../assets/img/footer-img.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <p className="footer-title">Have any idea?</p>
            <p className="footer-text">Let's work together</p>
            <p className="footer-mail">nico.sierra13@gmail.com</p>

            <div className="footer-socials">
              {iconsArray.map((icon, index) => (
                <a href={icon.link}>
                  <FontAwesomeIcon key={index} icon={icon.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-image">
            <img src={footerImage} />
          </div>
        </div>
        <label className="footer-label"> Developed by Nicolás Sierra</label>
      </div>
    </div>
  );
};

export default Footer;
