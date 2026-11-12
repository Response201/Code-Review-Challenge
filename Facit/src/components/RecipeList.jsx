import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onFavorite }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
};

export default RecipeList;
