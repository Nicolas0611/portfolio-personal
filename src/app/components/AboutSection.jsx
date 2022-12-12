import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutSection = ({ title, ProfileImage, LinkButton }) => {
  return (
    <>
      <div className="about-image">
        <img src={ProfileImage} />
      </div>
      <div className="about-content">
        <h2 className="about-title text-center">{title}</h2>
        <div className="content">
          <div className="about-parragraph">
            <p className="parragraph">
              Creating digital-multimedia solutions is what I work for,
              combining my design skills and engineering to develop high quality
              products and experiences.With knowledge in front-end development
              and API Rest consuming services using technologies like
              Javascript, React.js, redux, Next.js, preprocessors as SASS and
              css frameworks such as tailwind, handling software versioning with
              git and implementing gitflow branching methodology.<br></br> As
              well with solid knowledge on UX/UI design, quantitative /
              qualitative research, and atomic design, to provide users the
              better solution for their experiences on different platforms.Daily
              learning to improve and innovate with my work is my main goal,
              challenging myself with new projects, open to learn new
              technologies to work with in multidisciplinary teams
            </p>
            <div className="separator"></div>
          </div>
          <div className="about-button">
            <LinkButton
              text="Download CV"
              style="black"
              styleBg="black-bg"
              icon={faArrowRight}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
