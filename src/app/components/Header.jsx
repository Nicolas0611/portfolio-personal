import React from "react";
import { headerImages } from "../library/importImages";

const Header = () => {
  return (
    <div className="header container">
      <div className="header-logo">
        <img src={headerImages[0].image} />
      </div>
      <div className="header-hamburguer">
        <img src={headerImages[1].image} />
      </div>
    </div>
  );
};

export default Header;
