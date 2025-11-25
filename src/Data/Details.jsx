import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import moviesData from "../Data/MoviesData";

const AllMovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const foundMovie = moviesData.find((m) => parseInt(m.id) === parseInt(id));
    setMovie(foundMovie);

    if (foundMovie) {
      const uniqueDates = Array.from(
        new Set(
          foundMovie.slots.map((slot) =>
            new Date(slot.time).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })
          )
        )
      );
      setSelectedDate(uniqueDates[0]);
    }
  }, [id]);

  if (!movie) return <p className="text-white p-8">Loading...</p>;

  const uniqueDates = Array.from(
    new Set(
      movie.slots.map((slot) =>
        new Date(slot.time).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      )
    )
  );

  const filteredSlots = movie.slots.filter(
    (slot) =>
      new Date(slot.time).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }) === selectedDate
  );

  return (
    <div className="container mx-auto px-10 flex flex-col">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-red-500 hover:text-red-600 font-semibold"
      >
        &larr; Back
      </button>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold title text-red-300">{movie.title}</h1>
        <div className="flex justify-center items-center gap-6 mt-2 text-gray-300 flex-wrap">
          <span>⭐ {movie.rating}/10</span>
          <span>{movie.duration}</span>
          <span>{movie.genre}</span>
        </div>
      </div>

      {/* ⭐ MAIN SECTION — CENTERED PROPERLY ⭐ */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-10">

        {/* LEFT SIDE */}
        <div className="md:w-1/3 flex border border-red-300 rounded-4xl flex-col items-center gap-4">
          <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden w-full">
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full rounded-t-lg object-cover"
            />
          </div>

          <a
            href={movie.trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-800 text-white hover:bg-black title px-30 py-1 rounded-full shadow transition title"
          >
            Watch Trailer
          </a>
        </div>

        {/* RIGHT SIDE - Showtimes */}
        <div className="md:w-1/2 bg-[#212a41] shadow-md rounded-lg p-4">
          <h2 className="text-3xl  font-semibold text-red-300 title mb-4 text-center">
            Showtimes
          </h2>

          {/* Dates */}
          <div className="grid grid-cols-4  sm:grid-cols-7 gap-2 mb-4">
            {uniqueDates.map((day, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDate(day)}
                className={`cursor-pointer text-center p-2 rounded border shadow ${
                  selectedDate === day
                    ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                    : "bg-gray-900 border-gray-700 text-gray-300"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Times */}
          <div className="flex flex-wrap gap-2 pb-12 justify-center">
            {filteredSlots.length > 0 ? (
              filteredSlots.map((slot, idx) => (
                <div
                  key={idx}
                  className="bg-gray-00 text-white text-center px-2 py-1 rounded shadow border border-gray-700"
                >
                  {new Date(slot.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              ))
            ) : (
              <p className="text-gray-400">No showtimes</p>
            )}
          </div>

          {/* Cast Inside Showtime Card */}
          <div className=" shadow-md rounded-lg p-4 mt-6">
            <h2 className="text-3xl font-semibold title text-red-300  mb-4 text-center">
              Cast
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {movie.cast.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 shadow rounded-lg p-3 flex flex-col items-center text-center w-36"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-20 h-20 object-cover rounded-full mb-2"
                  />
                  <p className="text-white font-semibold">{c.name}</p>
                  <p className="text-gray-400 text-sm">{c.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className="bg-gray-800 shadow-md rounded-lg p-6 text-center mt-10">
        <h2 className="text-3xl title font-semibold text-red-300 mb-2">Story</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">{movie.synopsis}</p>
      </div>

      {/* DIRECTOR & PRODUCER */}
      <div className="flex flex-wrap gap-6 justify-center mt-10">

        {/* Directors */}
        {Array.isArray(movie.director)
          ? movie.director.map((d, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center text-center w-36"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-20 h-20 object-cover rounded-full mb-2"
                />
                <p className="text-white font-semibold">{d.name}</p>
                <p className="text-gray-400 text-sm">Director</p>
              </div>
            ))
          : (
            <div className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center text-center w-36">
              <img
                src={movie.director.img}
                alt={movie.director.name}
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <p className="text-white font-semibold">{movie.director.name}</p>
              <p className="text-gray-400 text-sm">Director</p>
            </div>
          )}

        {/* Producer */}
        <div className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center text-center w-36">
          <img
            src={movie.producer.img}
            alt={movie.producer.name}
            className="w-20 h-20 object-cover rounded-full mb-2"
          />
          <p className="text-white font-semibold">{movie.producer.name}</p>
          <p className="text-gray-400 text-sm">Producer</p>
        </div>
      </div>
    </div>
  );
};

export default AllMovieDetails;
