import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
  const [meals, setMeals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        setMeals(prevMeals => [...prevMeals, response.data.meals[0]]);
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };

    // Fetch the first meal
    fetchRandomMeal();
  }, []);

  const nextSlide = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setMeals(prevMeals => [...prevMeals, response.data.meals[0]]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? meals.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {" "}
      <div className="prev">
        <button onClick={prevSlide}> &lt;</button>
      </div>
      <div className="slider">
        <img
          src={meals.length > 0 && meals[currentIndex].strMealThumb}
          alt="{meals.length > 0 && meals[currentIndex].strMeal}"
        />
        <h2>{meals.length > 0 && meals[currentIndex].strMeal}</h2>
        <p>{meals.length > 0 && meals[currentIndex].strInstructions}</p>
      </div>
      <div className="next">
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </>
  );
};

export default Slider;
