
import { useState } from "react";
import { recipesData }  from "./data/recipes";
import RecipeList from "./components/RecipeList";
import {toggleFavorite, filterRecipes, getFavoriteCount,} from "./functions/recipeFunctions";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [showFavorites, setShowFavorites] = useState(false);


  const displayedRecipes = filterRecipes(recipes, showFavorites);


  const handleFavorite = (id) => {
    setRecipes(toggleFavorite(recipes, id));
  };

 
  const favoriteCount = getFavoriteCount(recipes);

  return (
    <div className="container">
      <header>
        <h1>Recipe App</h1>
        <p>Find and save your favorite recipes!</p>
      </header>

      <div className="controls">
        <button onClick={() => setShowFavorites(false)}>
          All recipes
        </button>

        <button onClick={() => setShowFavorites(true)}>
          Favorites ({favoriteCount})
        </button>
      </div>

    
      <RecipeList
        recipes={displayedRecipes}
        onFavorite={handleFavorite}
      />

      {displayedRecipes.length === 0 &&  <p className="empty-message">No favorite recipes yet!</p>}

      <footer>
        <p>
          Favorites: {favoriteCount} | Total recipes: {recipes.length}
        </p>
      </footer>
    </div>
  );
};

export default App;
