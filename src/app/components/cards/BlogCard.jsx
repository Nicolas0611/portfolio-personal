import React from "react";
import { Tag } from "../Tag";
import footerImage from "../../../assets/img/footer-img.png";
import LinkButton from "../buttons/LinkButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const BlogCard = ({ title, tags }) => {
  const tagElements = [
    {
      title: "React",
      bg: "blue",
    },
    {
      title: "Javascript",
      bg: "yellow",
    },
  ];

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-tags ">
        {tags.map((tag, index) => (
          <Tag key={index} tech={tag.title} />
        ))}
      </div>
      <img className="card-image" src={footerImage}></img>

      <div className="card-buttons">
        <LinkButton
          text="View"
          style="black"
          styleBg="black-bg"
          icon={faArrowRight}
        />
        <LinkButton
          text="Deploy"
          style="black"
          styleBg="black-bg"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};
