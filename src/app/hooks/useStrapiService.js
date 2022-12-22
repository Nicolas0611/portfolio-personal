import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../store/slices/ui/thunks";

export const useStrapiService = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.ui.projects);

  const startGetContent = () => {
    dispatch(getContent("projects"));
  };
  return {
    startGetContent,
    projects,
  };
};
