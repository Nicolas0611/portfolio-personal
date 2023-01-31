import { getApiResponse } from "../../../helpers/getApiResponse";
import { checkData, getIndexContent, getExperiences } from "./uiSlice";

export const getContent = (route, paginationLimit) => {
  let projects = [];

  return async (dispatch) => {
    dispatch(checkData());
    try {
      const {
        data: { data },
      } = await getApiResponse(route, paginationLimit);

      data.forEach((project) => {
        projects.push({
          id: project.id,
          title: project.attributes.title,
          img: project.attributes.thumbnail.data.attributes.url,
          tech: project.attributes.tech.map((stack) => stack.Title),
          href: project.attributes.link,
        });
      });
      dispatch(getIndexContent(projects));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getExperience = (route, paginationLimit) => {
  let experiences = [];

  return async (dispatch) => {
    dispatch(checkData());
    try {
      const {
        data: { data },
      } = await getApiResponse(route, paginationLimit);
      data.forEach((project) => {
        experiences.push({
          id: project.id,
          title: project.attributes.title,
          description: project.attributes.description,
          duration: project.attributes.duration,
          timerange: project.attributes.timerange,
        });
      });

      dispatch(getExperiences(experiences));
    } catch (error) {
      console.log(error);
    }
  };
};
