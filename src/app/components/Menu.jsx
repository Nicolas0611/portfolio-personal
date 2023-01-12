import React from "react";
import { headerImages } from "../library/importImages";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/slices/ui/uiSlice";

const menuLinks = [
  {
    label: "Home",
    color: "Orange",
    href: "#hero",
  },
  {
    label: "About",
    color: "Blue",
    href: "#about",
  },
  {
    label: "Skills",
    color: "Green",
    href: "#skills",
  },
  {
    label: "Projects",
    color: "Red",
    href: "#projects",
  },
];
const Menu = ({ isOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={
        isOpen ? `open-menu menu-overlay` : ` menu-overlay close-menu `
      }
    >
      <div className="menu">
        <button className="close-button" onClick={() => dispatch(closeModal())}>
          <img src={headerImages[2].image} />
        </button>

        <ul className="menu-list">
          {menuLinks.map((link, index) => (
            <li key={index} className="menu-item">
              <a
                onClick={() => dispatch(closeModal())}
                href={link.href}
                className={`menu-link ${link.color}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
