export const getTagsByTech = (tech) => {
  let colorTags = {
    React: "blue",
    Javascript: "yellow",
    Node: "green",
    API: "purple",
    UX: "red",
    UI: "pink",
    Atomic: "sky",
  };

  return colorTags[tech];
};
