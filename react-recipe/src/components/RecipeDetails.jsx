import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setRecipe(data.meals[0]);
        }
      });
  }, [id]);

  if (!recipe) {
    return <p className="loading-text">Loading recipe...</p>;
  }

  // Collect ingredients & measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      {/* Hero Title Section */}
      <div
        className="recipe-hero-banner"
        style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
      >
        <div className="recipe-hero-overlay">
          <h1 className="recipe-hero-title">{recipe.strMeal}</h1>
          <p className="recipe-hero-subtitle">
            Discover the rich flavors of a traditional dish perfected through generations of home cooking and culinary passion.
          </p>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="recipe-details-container">

        {/* Image */}
         <div className="recipe-image-wrapper">
           <img src={recipe.strMealThumb} 
           alt={recipe.strMeal} 
           className="recipe-image" /> 
           </div>
           
        {/* Ingredients Section */}
        <section className="ingredients-section">
          <h2 className="section-heading">Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section className="instructions-section">
          <h2 className="section-heading">Instructions</h2>
          <p className="instructions-text">{recipe.strInstructions}</p>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetails;
