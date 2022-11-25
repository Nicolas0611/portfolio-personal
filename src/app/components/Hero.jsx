import React from "react";
import Spline from "@splinetool/react-spline";
import FilledButton from "./buttons/FilledButton";
import LinkButton from "./buttons/LinkButton";
import IconGrid from "./IconGrid";

const Hero = ({ title, illustration }) => {
  return (
    <div className="hero">
      <div className="hero-3D">
        <Spline className="hero-3D_illustration" scene={illustration} />
      </div>
      <div className="hero-content">
        <div>
          <h2 className="hero-name text-center"> {title}</h2>
          <p className="hero-parragraph text-center">
            I Develop ideas and help build a better world through
            <span className="hero-parragraph_span"> software</span> and{" "}
            <span className="hero-parragraph_span">design</span>
          </p>
          <div className="hero-buttons">
            <FilledButton text="Contact" />
            <LinkButton text="Download CV" style="white" styleBg="white-bg" />
          </div>
        </div>
        <div className="hero-social">
          <IconGrid />
        </div>
      </div>
    </div>
  );
};

export default Hero;
