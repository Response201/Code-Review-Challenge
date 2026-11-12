
import { useState } from "react";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Pancakes",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
      ingredients: ["Flour", "Milk", "Eggs"],
      favorite: false,
    },
    {
      id: 2,
      name: "Pasta",
      category: "Dinner",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
      ingredients: ["Pasta", "Tomatoes", "Cheese"],
      favorite: true,
    },
    {
      id: 3,
      name: "Chocolate Cake",
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
      ingredients: ["Flour", "Chocolate", "Sugar"],
      favorite: false,
    },
  ]);

  const [showFavorites, setShowFavorites] = useState(false);

 
  const handleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        return {
          ...recipe,
          favorite: !recipe.favorite,
        };
      }

      return recipe;
    });

    setRecipes(updatedRecipes);
  };

  
  const displayedRecipes = recipes.filter((recipe) => {
    if (showFavorites === true) {
      return recipe.favorite === true;
    }

    return true;
  });

  // Räknar favoriter
  let count = 0;

  recipes.forEach((recipe) => {
    if (recipe.favorite === true) {
        count = count + 1;
    }
  });

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
          Favorites ({count})
        </button>
      </div>

      <div className="recipe-list">
        {displayedRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
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
                onClick={() => handleFavorite(recipe.id)}
              >
                {recipe.favorite ? "Remove favorite" : "Add favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {displayedRecipes.length === 0 && (
        <p className="empty-message">No favorite recipes yet!</p>
      )}

      <footer>
        <p>
          Favorites: {count} | Total recipes: {recipes.length}
        </p>
      </footer>
    </div>
  );
};

export default App;
