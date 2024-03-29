import React from "react";
import { headerImages } from "../library/importImages";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../store/slices/ui/uiSlice";
import Menu from "./Menu";

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.ui);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={headerImages[1].image} />
        </div>
        <div className="header-hamburguer">
          <button
            className="header-hamburguer_button"
            onClick={() => dispatch(openModal())}
          >
            <img src={headerImages[0].image} />
          </button>
          <Menu isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
