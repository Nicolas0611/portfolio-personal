import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../store/slices/ui/thunks";

export const useStrapiService = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.ui.projects);
  const limit = useSelector((state) => state.ui.pageLimit);
  const status = useSelector((state) => state.ui.status);

  const startGetContent = () => {
    dispatch(getContent("projects", limit));
  };
  return {
    startGetContent,
    projects,
    limit,
    status,
  };
};
