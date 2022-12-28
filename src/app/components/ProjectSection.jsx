import React, { useEffect, useState } from "react";
import { useStrapiService } from "../hooks/useStrapiService";
import OutlineButton from "./buttons/OutlineButton";
import { BlogCard } from "./cards/BlogCard";
import { useDispatch } from "react-redux";
import { pageLimitContent } from "../store/slices/ui/uiSlice";
import { RotatingLines } from "react-loader-spinner";

const ProjectSection = ({ title }) => {
  const { startGetContent, projects, limit, status } = useStrapiService();
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    startGetContent();
  }, [limit]);

  const handleViewMore = () => {
    if (limit > projects.length) {
      setState(true);
    }
    dispatch(pageLimitContent());
  };
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
      <div
        className="projects-btn"
        onClick={() => {
          handleViewMore();
          console.log(limit);
        }}
      >
        {status === "checking" ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          <OutlineButton state={state} label={"View More"} />
        )}
      </div>
    </>
  );
};

export default ProjectSection;
