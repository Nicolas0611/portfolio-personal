import React from "react";

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
  return (
    <div
      className={isOpen ? `open-menu menu-overlay` : `close-menu menu-overlay`}
    >
      <div className="menu">
        <ul className="menu-list">
          {menuLinks.map((link, index) => (
            <li key={index} className="menu-item">
              <a href={link.href} className={`menu-link ${link.color}`}>
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
