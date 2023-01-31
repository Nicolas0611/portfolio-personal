import { useEffect } from "react";
import { useStrapiService } from "../hooks/useStrapiService";
import { LargeCard } from "./cards/LargeCard";

const Experience = ({ title }) => {
  const { startGetExperiences, experiences } = useStrapiService();

  useEffect(() => {
    startGetExperiences();
  }, []);
  return (
    <div className="techSkill-section">
      <p className="tech-title text-center">{title}</p>
      <div className="experience">
        {experiences.map((experience, index) => (
          <LargeCard
            key={index}
            title={experience.title}
            description={experience.description}
            duration={experience.duration}
            timerange={experience.timerange}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
