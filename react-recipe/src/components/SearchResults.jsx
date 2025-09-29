import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addToFavorites,
  isFavorited,
  getFavorites,
} from "../utils/favoriteUtils";
import "./style.css";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const favs = getFavorites();
    setFavoriteIds(favs.map((m) => m.idMeal));
  }, []);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        const resByName = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const dataByName = await resByName.json();

        if (dataByName.meals) {
          setMeals(dataByName.meals);
        } else {
          const resByIngredient = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
          );
          const dataByIngredient = await resByIngredient.json();
          setMeals(dataByIngredient.meals || []);
        }
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleAddToFavorites = (meal) => {
    addToFavorites(meal);
    setFavoriteIds((prev) => [...new Set([...prev, meal.idMeal])]);
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <section className="essentials-sectionk">
      <div >
        <h2 className="section-title1">Search Results for "{query}"</h2>
        <div className="search-head">
          <h3 className="search-heading">Recipes</h3>
        <h2 className="search-title">Fresh recipes for hungry cooks</h2>
        <p className="search-subtitle">Explore delicious meals crafted with passion and precision
        </p>
        </div>
      
      
        
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : meals.length === 0 ? (
        <p style={{ textAlign: "center" }}>No meals found.</p>
      ) : (
        <div className="cards-grid">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="card"
              onClick={() => handleRecipeClick(meal.idMeal)}
              style={{ cursor: "pointer" }}
            >
              {favoriteIds.includes(meal.idMeal) && (
                <div className="heart-icon">❤️</div>
              )}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="card-body">
                <h4 className="card-title">{meal.strMeal}</h4>
                <button
                  className="btn-secondary mt-3"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleAddToFavorites(meal);
                  }}
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};

export default SearchResults;
