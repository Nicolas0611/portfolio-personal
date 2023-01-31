import { useSelector, useDispatch } from "react-redux";
import { getContent, getExperience } from "../store/slices/ui/thunks";
import { filterContent } from "../store/slices/ui/uiSlice";

export const useStrapiService = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.ui.projects);
  const limit = useSelector((state) => state.ui.pageLimit);
  const status = useSelector((state) => state.ui.status);
  const category = useSelector((state) => state.ui.filteredType);
  const experiences = useSelector((state) => state.ui.experiences);

  const startGetContent = () => {
    dispatch(getContent("projects", limit));
  };
  const startGetExperiences = () => {
    dispatch(getExperience("experiences", 7));
  };

  const startFiltering = (value) => {
    dispatch(filterContent(value));
  };
  return {
    startGetContent,
    startFiltering,
    startGetExperiences,
    projects,
    limit,
    status,
    category,
    experiences,
  };
};
