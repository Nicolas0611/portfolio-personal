export const getTagsByTech = (tech) => {
  let colorTags = {
    React: "blue",
    Javascript: "yellow",
    Node: "green",
    API: "purple",
  };

  return colorTags[tech];
};
