import React from "react";
import { NavLink } from "react-router";
import { FaSignInAlt } from "react-icons/fa"; // Login icon

export function Navbar({ user, onLogout }) {
  const navItems = ["Home", "Movies", "Releases", "Contact", "Bookings"];

  return (
    <header className="sticky top-0 z-40 bg-black border-b border-red-400">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl text-red-400 rounded-full">🎬</span>
          <span className="title text-red-600 text-xl">CineVerse</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-1 rounded-full font-medium cursor-pointer transition-all
                bg-gradient-to-r from-[#200802] to-[#400401] 
                text-white border-none
                ${isActive ? "ring-2 ring-red-600" : "hover:from-[#400401] hover:to-[#600803]"}`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Auth Area */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2">
              {/* Profile Image / Fallback */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full  bg-gradient-to-r from-[#200802] to-[#400401] 
                hover:from-[#400401] hover:to-[#600803] flex items-center justify-center text-white font-semibold">
                  {user.email[0].toUpperCase()}
                </div>
              )}
              {/* Logout */}
              <button
                className="px-4 py-2 rounded-full text-white font-medium cursor-pointer 
                bg-gradient-to-r from-[#200802] to-[#400401] 
                hover:from-[#400401] hover:to-[#600803] transition-all"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium cursor-pointer 
                bg-gradient-to-r from-[#200802] to-[#400401] 
                hover:from-[#400401] hover:to-[#600803] transition-all"
            >
              <FaSignInAlt /> Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
