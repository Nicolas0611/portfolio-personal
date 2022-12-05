import React from "react";
import Hero from "../components/Hero";
import Layout from "../layout/Layout";
import ProfileImage from "../../assets/img/Profile.png";
import LinkButton from "../components/buttons/LinkButton";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <div className="container">
          <div className="hero-section">
            <Hero
              title={"Hi, I'm Nicolás"}
              illustration={
                "https://prod.spline.design/IQG953S8-skVBcXx/scene.splinecode"
              }
            />
          </div>
          <div className="about about-section">
            <AboutSection
              title={"About me"}
              ProfileImage={ProfileImage}
              LinkButton={LinkButton}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
