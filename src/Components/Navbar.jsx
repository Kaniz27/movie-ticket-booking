import React from "react";
import { NavLink } from "react-router"; 
export function Navbar({ user, onLogout }) {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-black/85 via-black/60 to-black/60 border-b-[3px] border-red-600/5">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl text-red-400 rounded-full">🎬</span>
          <span className="title text-red-600 text-xl">CineVerse</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden gap-12  md:flex ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-red-600" : "text-gray-400"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-red-600" : "text-gray-400"}`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/releases"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-red-600" : "text-gray-400"}`
            }
          >
            Releases
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-red-600" : "text-gray-400"}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-red-600" : "text-gray-400"}`
            }
          >
            Bookings
          </NavLink>
        </nav>

        {/* Auth Area */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-gray-300">{user.email}</span>
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-md text-sm transition"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
