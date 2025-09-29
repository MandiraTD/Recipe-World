const FAVORITES_KEY = "favoriteMeals";

export const isFavorited = (id) => {
  const favorites = getFavorites();
  return favorites.some((meal) => meal.idMeal === id);
};

export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToFavorites = (meal) => {
  const current = getFavorites();
  const exists = current.find((m) => m.idMeal === meal.idMeal);
  if (!exists) {
    const updated = [...current, meal];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  }
};

export const removeFromFavorites = (mealId) => {
  const current = getFavorites();
  const updated = current.filter((meal) => meal.idMeal !== mealId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
};


