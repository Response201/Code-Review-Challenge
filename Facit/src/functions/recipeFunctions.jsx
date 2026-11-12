

export const toggleFavorite = (recipes, id) => {
  return recipes.map((recipe) =>
    recipe.id === id
      ? { ...recipe, favorite: !recipe.favorite }
      : recipe
  );
};


export const filterRecipes = (recipes, showFavorites) => {
  if (showFavorites) {
    return recipes.filter((recipe) => recipe.favorite);
  }

  return recipes;
};


export const getFavoriteCount = (recipes) => {
  return recipes.filter((recipe) => recipe.favorite).length;
};
