import React from "react";
import { Tag } from "../Tag";
import footerImage from "../../../assets/img/footer-img.png";
import LinkButton from "../buttons/LinkButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const BlogCard = ({ title, tags, img, href }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-tags ">
        {tags.map((tag, index) => (
          <Tag key={index} tech={tag} />
        ))}
      </div>
      <img className="card-image" src={img}></img>

      <div className="card-buttons">
        <LinkButton
          href={href}
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
