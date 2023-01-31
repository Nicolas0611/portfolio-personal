import portfolioApi from "../api/portfolioApi";

export const getApiResponse = async (route, paginationLimit) => {
  const data = await portfolioApi.get(
    `/${route}/?populate=*&pagination[start]=0&pagination[limit]=${paginationLimit}`
  );
  return data;
};
