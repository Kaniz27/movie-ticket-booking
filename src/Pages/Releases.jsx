// src/pages/Releases.jsx
import React from "react";
import movies from "./ReleaseData";

const Releases = () => {
  return (
    <div className="mx-auto px-24 p-6 container items-center  text-white ">
      <h1 className="text-5xl font-bold title text-red-600 mb-6 text-center">New Releases</h1>
      <h2 className="text-center text-xl pb-14 text-white">Latest Movies • Now Showing</h2>
      
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl title">{movie.title}</h2>
              <p className="text-gray-400">{movie.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Releases;
