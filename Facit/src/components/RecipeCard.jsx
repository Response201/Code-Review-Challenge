
const RecipeCard = ({ recipe, onFavorite }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />

      <div className="recipe-content">
        <h2>{recipe.name}</h2>

        <p className="category">{recipe.category}</p>

        <h4>Ingredients</h4>

        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <button
          className="favorite-button"
          onClick={() => onFavorite(recipe.id)}
        >
          {recipe.favorite ? "Remove favorite" : "Add favorite"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
