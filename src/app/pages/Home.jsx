import React from "react";
import Hero from "../components/Hero";
import Layout from "../layout/Layout";
import ProfileImage from "../../assets/img/Profile.png";
import LinkButton from "../components/buttons/LinkButton";
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
            <div className="about-image">
              <img src={ProfileImage} />
            </div>
            <div className="about-content">
              <h2 className="about-title text-center">
                About <br></br> Me
              </h2>
              <div className="content">
                <div className="about-parragraph">
                  <p className="parragraph">
                    Creating digital-multimedia solutions is what I work for,
                    combining my design skills and engineering to develop high
                    quality products and experiences.With knowledge in front-end
                    development and API Rest consuming services using
                    technologies like Javascript, React.js, redux, Next.js,
                    preprocessors as SASS and css frameworks such as tailwind,
                    handling software versioning with git and implementing
                    gitflow branching methodology. As well with solid knowledge
                    on UX/UI design, quantitative / qualitative research, and
                    atomic design, to provide users the better solution for
                    their experiences on different platforms.Daily learning to
                    improve and innovate with my work is my main goal,
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
