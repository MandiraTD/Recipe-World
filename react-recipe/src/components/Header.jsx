import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../assets/7.png";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await res.json();
        if (data.categories) {
          const shuffled = data.categories.sort(() => 0.5 - Math.random());
          setCategories(shuffled.slice(0, 10));
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/search?query=${category}`);
    setIsMenuOpen(false); 
  };

  return (
    <header className="custom-header">
      <p className="logo"> Recipe World</p>

      
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav className={`custom-header-nav ${isMenuOpen ? "show" : ""}`}>
        <Link to="/" className="custom-header-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/favorite" className="custom-header-link" onClick={() => setIsMenuOpen(false)}>Favorites</Link>

        {/* Category Dropdown */}
        <div className="custom-header-dropdown">
          <p className="custom-header-link">Categories ▾</p>
          <div className="custom-header-dropdown-menu">
            {categories.map((cat) => (
              <div
                key={cat.idCategory}
                className="custom-header-dropdown-item"
                onClick={() => handleCategoryClick(cat.strCategory)}
              >
                {cat.strCategory}
              </div>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
