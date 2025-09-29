import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, removeFromFavorites } from "../utils/favoriteUtils";
import "./style.css";
import img4 from "../assets/4.jpg";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    removeFromFavorites(id);
    setFavorites(getFavorites());
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <section className="essentials-sectionk">
       <div 
        className="recipe-hero-banner"
        style={{ backgroundImage:  `url(${img4})`, marginBottom: "4rem"}}
      >
        <div className="recipe-hero-overlay1">
          <h1 className="recipe-hero-title">Your Favorite Recipes</h1>
          <p className="recipe-hero-subtitle">
            Discover the rich flavors of a traditional dish perfected through generations of home cooking and culinary passion.
          </p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>No favorites yet.</p>
      ) : (
        <div className="cards-grid">
          {favorites.map((meal) => (
            <div
              key={meal.idMeal}
              className="card"
              onClick={() => handleRecipeClick(meal.idMeal)}
              style={{ cursor: "pointer" }}
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="card-body">
                <h4 className="card-title">{meal.strMeal}</h4>
                <button
                  className="btn-secondary mt-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(meal.idMeal);
                  }}
                >
                Unfavorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
