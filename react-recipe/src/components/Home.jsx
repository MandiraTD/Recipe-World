import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToFavorites,
  isFavorited,
  getFavorites,
} from "../utils/favoriteUtils";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/6.jpg";
import img5 from "../assets/5.jpg";

import "./style.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = getFavorites();
    setFavoriteIds(favs.map((m) => m.idMeal));
  }, []);

  const fetchRandomRecipes = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const shuffled = [...data.meals].sort(() => 0.5 - Math.random());
          setRecipes(shuffled.slice(0, 10));
        } else {
          setRecipes([]);
        }
      });
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);


  const handleAddToFavorites = (meal) => {
    addToFavorites(meal);
    setFavoriteIds((prev) => [...new Set([...prev, meal.idMeal])]);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      {/* ==== Hero Section ==== */}
      <section className="custom-hero ">
      
        <div className="custom-hero-container">
          <div className="custom-hero-title">
            <p>
              Stop Searching. <br />
              Start Cooking.
              <br />
              Simple Recipes for Busy Weeknights.
            </p>
          </div>
          <p className="custom-hero-subtext">
            Dinner Solved. Tired of the same old recipes? Discover thousands of
            curated dishes with clear instructions, helpful tips, and ingredient
            swaps. Whether you’re looking for vegan, gluten-free, or just
            fast—your next favorite meal is just a click away.
          </p>
        </div>

      
        <div className="custom-hero-images">
          <img
            src={img1}
            alt="Drink"
            className="custom-hero-img custom-hero-img-left"
          />
          <img
            src={img2}
            alt="Main Dish"
            className="custom-hero-img custom-hero-img-main"
          />
          <img
            src={img3}
            alt="Cake"
            className="custom-hero-img custom-hero-img-right"
          />
        </div>
      </section>

      {/* ==== Search Section ==== */}
      <section className="hero-section">
        <h2 className="hero-title">Recipes that spark culinary adventure</h2>
        <p className="hero-subtitle">
          Where every ingredient tells a story. Simple cooking meets bold
          flavors.
        </p>
        <div className="hero-search-wrapper">
          <input
            type="text"
            placeholder=" 🔎 Search by main ingredient / recipe name / category"
            className="hero-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <div className="hero-button" onClick={handleSearch}>
            Search
          </div>
        </div>
      </section>

      {/* ==== Featured Recipe Section ==== */}
      <section className="essentials-section">
        <h3 className="essentials-heading">Kitchen</h3>
        <h2 className="section-title">This Week's Featured Recipes</h2>
        <p className="section-subtitle">
          Meet our most popular, fastest-growing recipes right now. Get cooking!
        </p>
         <div 
          className="surprise-btn"
          onClick={fetchRandomRecipes} 
        >
          Surprise Me with Random Recipes
        </div>


        <div className="bento-grid">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.idMeal}
              className={`bento-card bento-${index + 1}`}
              onClick={() => handleRecipeClick(recipe.idMeal)}
              style={{ cursor: "pointer" }}
            >
              {favoriteIds.includes(recipe.idMeal) && (
                <div className="heart-icon">❤️</div>
              )}
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <div className="card-body">
                <h4 className="card-title">{recipe.strMeal}</h4>
                <button
                  className="btn-secondary mt-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToFavorites(recipe);
                  }}
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==== Testimonials Section ==== */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="header-title">Customer testimonials</h2>
          <p className="header-subtitle">Hear From Our Happy Cooks...</p>
        </div>

        <div className="testimonials-grid">
          {/* Testimonial Card 1 */}
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-text">
              "I’ve tried so many online recipes, but this site is truly
              special. The step-by-step instructions are clear, the ingredient
              lists are accurate, and every dish I’ve cooked has turned out
              delicious. My family especially loved the Classic Signature Pizza
              recipe — it tasted like something straight from a restaurant!"
            </p>
            <div className="reviewer-info">
              <img src={img4} alt="Reviewer 1" className="reviewer-avatar" />
              <div className="reviewer-details">
                <p className="reviewer-name">Saraa Kristy</p>
                <p className="reviewer-position">
                  Assistant Chef, Blue Langoon Hotel
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-text">
              "This website has completely changed the way I cook at home. The
              recipes are easy to follow, beautifully presented, and the photos
              make it so inspiring to try new dishes. I’ve discovered flavors I
              never thought I could make myself. Highly recommended for
              beginners and food lovers alike!"
            </p>
            <div className="reviewer-info">
              <img src={img5} alt="Reviewer 2" className="reviewer-avatar" />
              <div className="reviewer-details">
                <p className="reviewer-name">Maya David</p>
                <p className="reviewer-position">Housewife</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="testimonials-controls">
          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="navigation-arrows">
            <button className="arrow-btn left-arrow">←</button>
            <button className="arrow-btn right-arrow">→</button>
          </div>
        </div>
      </section>

      {/* ==== Footer Section ==== */}
    </div>
  );
};

export default Home;
