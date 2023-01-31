import React from "react";
import { Bullet } from "../components/Bullet";
import Skills from "./Skills";
import Academic from "./Academic";
import Experience from "./Experience";
import { useState } from "react";
const bulletProperties = [
  {
    title: "👍 Skills",
    id: "skills",
  },
  {
    title: "💼 Experience",
    id: "experience",
  },
  {
    title: "💥 Academic",

    id: "academic",
  },
];
const TechSection = () => {
  const [tab, setTab] = useState("skills");
  let currentTab = tab;
  return (
    <div className="tech-container">
      <div className="bullet-container">
        {bulletProperties.map((bullet) => (
          <div
            className="bullet-button"
            key={bullet.id}
            onClick={() => {
              setTab(bullet.id);
            }}
          >
            <Bullet title={bullet.title} />
          </div>
        ))}
      </div>
      {currentTab === "skills" ? (
        <Skills
          title={"TechStack and Skills"}
          subTitle1={"Development Skills"}
          subTitle2={"Product Design"}
        />
      ) : currentTab === "experience" ? (
        <Experience title={"Experience"} />
      ) : currentTab === "academic" ? (
        <Academic title={"Academic"} />
      ) : (
        <Skills />
      )}
    </div>
  );
};
export default TechSection;
