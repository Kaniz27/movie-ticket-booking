// src/pages/Releases.jsx
import React from "react";
import movies from "./ReleaseData";

const Releases = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">New Releases</h1>
      
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">{movie.title}</h2>
              <p className="text-gray-400">{movie.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Releases;
