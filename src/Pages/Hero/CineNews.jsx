import React from "react";

import mainImg from "../../assets/image/N1.png";
import card2 from "../../assets/image/N3.png";
import card1 from "../../assets/image/N2.png";
import card3 from "../../assets/image/N4.png";
import card4 from "../../assets/image/N5.png";
import card5 from "../../assets/image/N6.png";

const CineNews = () => {
  return (
    <div className="w-full bg-white px-6 lg:px-16 py-6">

      {/* Top Logo */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-wide title">
          Cine<span className="text-black title">News</span>
        </h1>

        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm shadow">
          🔴 Latest News
        </button>
      </div>

      {/* Featured bar */}
      <div className="mt-4 bg-red-50 border border-red-200 px-4 py-2 rounded-full flex items-center gap-3 overflow-hidden">
        <span className="text-red-600 font-semibold text-sm">Featured</span>
        <marquee className="text-gray-700 text-lg sm:text-xl">
          Midnight Premiere Shocks Audiences — Visuals Break the Internet…
        </marquee>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src={mainImg}
              className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3 w-max">
                Premiere
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-snug">
                Midnight Premiere Shocks Audiences — Visuals Break the Internet
              </h2>

              <p className="text-gray-200 mt-2 text-xs sm:text-sm">
                A surprise midnight premiere left fans stunned with groundbreaking VFX and an unforgettable score.
              </p>

              <div className="flex items-center gap-4 text-gray-300 text-xs mt-3">
                <span>⏱ 2h ago</span>
                <span>📅 Sep 14, 2025</span>
              </div>
            </div>
          </div>

          {/* 3 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl shadow p-3 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <img src={card1} className="w-full h-32 object-cover rounded-lg" />
              <span className="bg-red-600 text-white title text-xs px-2 py-1 rounded inline-block mt-2">
                Exclusive
              </span>
              <h3 className="font-bold text-black text-2xl  mt-2">Director Reveals Secret Cameo — Fans Go Wild</h3>
              <p className="text-xm text-gray-600  mt-1">An unannounced cameo by a legendary actor…</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl shadow p-3 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <img src={card2} className="w-full h-32 object-cover rounded-lg" />
              <span className="bg-blue-600 title text-white text-xs px-2 py-1 rounded inline-block mt-2">
                Music
              </span>
              <h3 className="font-bold text-2xl text-black mt-2">Composer Drops Teaser — Haunting Themes</h3>
              <p className="text-xm text-gray-600 mt-1">A 30-second teaser of the score hints…</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl shadow p-3 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <img src={card3} className="w-full h-32 object-cover rounded-lg" />
              <span className="bg-red-500 title text-white text-xs px-2 py-1 rounded inline-block mt-2">
                Featurette
              </span>
              <h3 className="font-bold text-2xl text-black mt-2">Stunt Team Reveals Behind-the-Scenes Reel</h3>
              <p className="text-xm text-gray-600 mt-1">The stunt reel shows daring choreography…</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5">
          {/* card 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex gap-4 cursor-pointer hover:shadow-xl transition">
            <img src={card4} className="w-24 h-20 sm:w-28 sm:h-24 rounded-lg object-cover" />
            <div>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                Box Office
              </span>
              <h4 className="font-semibold mt-2 text-black">Early Estimates Predict Massive Opening</h4>
              <p className="text-xs text-gray-600 mt-1">Analysts say it’s the comeback…</p>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex gap-4 cursor-pointer hover:shadow-xl transition">
            <img src={card5} className="w-24 h-20 sm:w-28 sm:h-24 rounded-lg object-cover" />
            <div>
              <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                Design
              </span>
              <h4 className="font-semibold mt-2 text-black">Creating a Dystopian Wardrobe</h4>
              <p className="text-xs text-gray-600 mt-1">How subtle choices shaped…</p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="bg-white text-black  rounded-xl shadow p-6">
            <h3 className="text-lg font-bold mb-2">Join CineNews</h3>
            <p className="text-gray-600 text-sm">Get curated cinematic news…</p>

            <div className="mt-4 text-black title text-xl flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 border px-3 py-2 rounded-l-lg outline-none"
              />
              <button className="bg-red-600 text-white px-4 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CineNews;
