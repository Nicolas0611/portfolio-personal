import portfolioApi from "../../../api/portfolioApi";
import { checkData, getIndexContent } from "./uiSlice";

export const getContent = (route) => {
  let projects = [];
  return async (dispatch) => {
    dispatch(checkData());
    try {
      const {
        data: { data },
      } = await portfolioApi.get(
        //TODO PAGINATION WHEN CLICKING VIEW MORE LOAD MORE PROJECTS
        `${route}/?populate=*&pagination[start]=0&pagination[limit]=4`
      );

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
