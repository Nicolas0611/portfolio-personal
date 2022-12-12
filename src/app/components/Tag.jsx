import React from "react";
import { getTagsByTech } from "../helpers/getTagsByTech";
import { useMemo } from "react";
export const Tag = ({ tech }) => {
  const colorTags = useMemo(() => getTagsByTech(tech), [tech]);

  return (
    <div className={`tag ${colorTags}`}>
      <p className="tag-title">{tech}</p>
    </div>
  );
};
