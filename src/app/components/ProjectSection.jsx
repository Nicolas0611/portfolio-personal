import React, { useEffect } from "react";
import { useStrapiService } from "../hooks/useStrapiService";
import OutlineButton from "./buttons/OutlineButton";
import { BlogCard } from "./cards/BlogCard";

const ProjectSection = ({ title }) => {
  const { startGetContent, projects } = useStrapiService();

  useEffect(() => {
    startGetContent();
  }, []);

  return (
    <>
      <h2 className="projects-title ">{title}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <BlogCard
            key={project.id}
            title={project.title}
            tags={project.tech}
            img={project.img}
            href={project.href}
          />
        ))}
      </div>
      <div className="projects-btn">
        <OutlineButton label={"View More"} />
      </div>
    </>
  );
};

export default ProjectSection;
