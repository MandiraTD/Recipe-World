import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Favorite from "./components/Favorites";
import SearchResults from "./components/SearchResults";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<SearchResults />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
