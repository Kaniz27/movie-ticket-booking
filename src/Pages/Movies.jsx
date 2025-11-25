import React, { useState } from "react";
import { Link } from "react-router"; // must be react-router-dom
import moviesData from "../Pages/Hero/AllMovie"; // default export

const categories = ["all", "action", "adventure", "horror", "comedy"];

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [limit, setLimit] = useState(12);

  const filteredMovies =
    selectedCategory === "all"
      ? moviesData
      : moviesData.filter((m) => m.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setLimit(12); }}
            className={`px-4 py-2 rounded-md border ${selectedCategory === cat ? "bg-red-600 border-red-600" : "border-gray-600"}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredMovies.slice(0, limit).map((movie) => (
          <Link
            to={`/allmovies/${movie.id}`} 
            key={movie.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={movie.image} 
              alt={movie.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h2 className="font-bold text-sm">{movie.title}</h2>
              <p className="text-xs text-gray-400">{movie.category}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More / Back Buttons */}
      <div className="text-center mt-6">
        {limit < filteredMovies.length ? (
          <button
            onClick={() => setLimit(limit + 12)}
            className="px-5 py-2 bg-red-600 rounded-md"
          >
            Show More
          </button>
        ) : filteredMovies.length > 12 ? (
          <button
            onClick={() => setLimit(12)}
            className="px-5 py-2 bg-red-600 rounded-md"
          >
            Back
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Movies;
