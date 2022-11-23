import React from "react";
import Hero from "../components/Hero";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <div className="container">
          <Hero
            title={"Hi, I'm Nicolás"}
            illustration={
              "https://prod.spline.design/IQG953S8-skVBcXx/scene.splinecode"
            }
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
