export const movieAction = (category, movie) => {
  return {
    type: "SELECT_MOVIE",
    category,
    movie
  };
};
