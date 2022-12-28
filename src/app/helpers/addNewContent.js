import { useSelector, useDispatch } from "react-redux";

export const addNewContent = (actualLimit) => {
  const addBy = 3;
  const projects = useSelector((state) => state.ui.projects);
  let prjCounter = actualLimit + addBy;

  if (projects.length <= prjCounter) {
    return prjCounter;
  }
};
