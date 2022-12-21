import portfolioApi from "../../../api/portfolioApi";
import { checkCredentials, getIndexContent } from "./uiSlice";

export const getContent = (route) => {
  let projects = [];
  return async (dispatch) => {
    dispatch(checkCredentials());
    try {
      const {
        data: { data },
      } = await portfolioApi.get(`${route}/?populate=*`);
      console.log(data);

      data.forEach((project) => {
        projects.push({
          id: project.id,
          title: project.attributes.title,
          img: project.attributes.thumbnail.data.attributes.url,
          tech: project.attributes.tech.map((stack) => stack.Title),
        });
      });
      dispatch(getIndexContent(projects));
    } catch (error) {
      console.log(error);
    }
  };
};
