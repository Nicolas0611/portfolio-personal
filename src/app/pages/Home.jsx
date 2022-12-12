import React from "react";
import Hero from "../components/Hero";
import Layout from "../layout/Layout";
import ProfileImage from "../../assets/img/Profile.png";
import LinkButton from "../components/buttons/LinkButton";
import AboutSection from "../components/AboutSection";
import TechSection from "../components/TechSection";
import { BlogCard } from "../components/cards/BlogCard";

const Home = () => {
  const cardsMap = [
    {
      title: "AgricaPro",
      techStack: [{ title: "React" }, { title: "API" }],
    },
    {
      title: "MusicLive",
      techStack: [
        { title: "React" },
        { title: "API" },
        { title: "Javascript" },
      ],
    },
    {
      title: "CountriesAPI",
      techStack: [{ title: "API" }, { title: "Javascript" }],
    },
    {
      title: "CalendarApp",
      techStack: [{ title: "Node" }, { title: "API" }, { title: "React" }],
    },
  ];

  return (
    <Layout>
      <main className="home">
        <div className=" container hero-section">
          <Hero
            title={"Hi, I'm Nicolás"}
            illustration={
              "https://prod.spline.design/IQG953S8-skVBcXx/scene.splinecode"
            }
          />
        </div>
        <div className="container about about-section">
          <AboutSection
            title={"About me"}
            ProfileImage={ProfileImage}
            LinkButton={LinkButton}
          />
        </div>
        <div className="tech tech-section">
          <div className="container">
            <TechSection
              title={"TechStack and Skills"}
              subTitle1={"Development Skills"}
              subTitle2={"Product Design"}
            />
          </div>
        </div>

        <div className="projects projects-section">
          <div className="container">
            <h2 className="projects-title ">Last Projects</h2>
            <div className="projects-grid">
              {cardsMap.map((card) => (
                <BlogCard title={card.title} tags={card.techStack} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
