import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import moviesData from "../Data/MoviesData";
import { FaFilm } from "react-icons/fa"; // Movie icon

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return (
  <div className="bg-white my-20">
      <div className="container  mx-auto px-4 ">
      <h2 className="text-4xl pt-12 font-bold mb-8 text-black title text-center">Featured Movies</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <img
                src={movie.img}
                alt={movie.title}
                className="w-60 h-60 object-cover rounded-2xl mt-4"
              />
              <div className="p-2">
                <h3 className="text-lg title font-semibold text-white flex items-center justify-center gap-2 mt-2">
                  <FaFilm /> {movie.title}
                </h3>
                <p className="text-gray-400 capitalize mt-1">{movie.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
};

export default FeaturedMovies;
