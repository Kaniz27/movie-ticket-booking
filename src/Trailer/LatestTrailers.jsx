import React, { useState } from "react";
import { trailersData } from "../Trailer/TrailersData";

const LatestTrailers = () => {
  const [selected, setSelected] = useState(trailersData[0]);

  return (
    <div className="container  mx-auto p-6 mt-20 flex flex-col md:flex-row gap-6">
      {/* Left side: Trending & Thumbnails */}
      <div className="md:w-1/3 bg-white rounded-lg shadow-lg p-4">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span>🎬</span> Latest Trailers
        </h2>

        {/* Thumbnail carousel */}
        <div className="flex overflow-x-auto gap-2 mb-4">
          {trailersData.map((t) => (
            <img
              key={t.id}
              src={t.thumbnail}
              alt={t.title}
              className={`w-24 h-24 object-cover rounded cursor-pointer border-2 ${
                selected.id === t.id ? "border-red-500" : "border-transparent"
              }`}
              onClick={() => setSelected(t)}
            />
          ))}
        </div>

        {/* Trending list */}
        <div>
          <h3 className="font-semibold mb-2">Now Trending</h3>
          <ul>
            {trailersData.slice(0, 3).map((t) => (
              <li
                key={t.id}
                className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => setSelected(t)}
              >
                <img
                  src={t.thumbnail}
                  alt={t.title}
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.genre}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side: Selected movie details */}
      <div className="md:w-2/3 bg-white rounded-lg shadow-lg p-6">
        <div className="relative">
          <img
            src={selected.thumbnail}
            alt={selected.title}
            className="w-full h-64 object-cover rounded"
          />
          <a
            href={selected.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer">
              ▶
            </div>
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-4">{selected.title}</h2>
        <div className="flex gap-2 text-sm mt-2">
          {selected.genre.split(",").map((g, idx) => (
            <span
              key={idx}
              className="bg-red-200 text-red-700 px-2 py-1 rounded-full text-xs"
            >
              {g.trim()}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          {selected.duration} | {selected.year}
        </p>
        <p className="mt-3 text-gray-700">{selected.description}</p>

        {/* Credits */}
        <h3 className="font-semibold mt-4 mb-2">Credits</h3>
        <div className="flex gap-4">
          {selected.credits.director && (
            <div className="flex flex-col items-center">
              <img
                src={selected.credits.director.image}
                alt={selected.credits.director.name}
                className="w-16 h-16 rounded-full object-cover mb-1"
              />
              <p className="text-sm font-semibold">{selected.credits.director.name}</p>
              <p className="text-xs text-gray-500">Director</p>
            </div>
          )}
          {selected.credits.producer && (
            <div className="flex flex-col items-center">
              <img
                src={selected.credits.producer.image}
                alt={selected.credits.producer.name}
                className="w-16 h-16 rounded-full object-cover mb-1"
              />
              <p className="text-sm font-semibold">{selected.credits.producer.name}</p>
              <p className="text-xs text-gray-500">Producer</p>
            </div>
          )}
          {selected.credits.singer && (
            <div className="flex flex-col items-center">
              <img
                src={selected.credits.singer.image}
                alt={selected.credits.singer.name}
                className="w-16 h-16 rounded-full object-cover mb-1"
              />
              <p className="text-sm font-semibold">{selected.credits.singer.name}</p>
              <p className="text-xs text-gray-500">Singer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestTrailers;
