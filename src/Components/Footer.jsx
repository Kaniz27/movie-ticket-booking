import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t-2 border-red-600 relative">

      {/* Top Red Border Glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_20px_#ff0000]"></div>

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Social */}
        <div>
          <h2 className="text-red-600 text-3xl font-bold mb-3">CineVERSE</h2>
          <p className="text-sm mb-6">
            Experience the dark side of cinema with the latest news, reviews,
            and exclusive content.
          </p>

          <div className="flex gap-4">
            <a className="w-9 h-9 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
              <FaTwitter />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
              <FaInstagram />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-red-600 text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li><Link to="/movies" className="hover:text-red-600">Movies</Link></li>
            <li><Link to="/releases" className="hover:text-red-600">Releases</Link></li>
            <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
            <li><Link to="/login" className="hover:text-red-600">Login</Link></li>
          </ul>
        </div>

        {/* Genres */}
        <div>
          <h3 className="text-red-600 text-lg font-semibold mb-4">Genres</h3>
          <ul className="space-y-3">
            <li className="hover:text-red-600">Horror</li>
            <li className="hover:text-red-600">Thriller</li>
            <li className="hover:text-red-600">Action</li>
            <li className="hover:text-red-600">Drama</li>
            <li className="hover:text-red-600">Comedy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-red-600 text-lg font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-red-600 " />
            <span>kaniz@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaPhone className="text-red-600" />
            <span>+8801707458796</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-600" />
            <span>Mohammadpur, Dhaka</span>
          </div>
        </div>
      </div>

      {/* Center Divider Icon */}
      <div className="flex justify-center my-8">
        <div className="w-12 h-12 flex items-center justify-center border border-red-600 rounded-full text-red-600 shadow-[0_0_10px_#ff0000]">
          ★
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm space-x-6">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookie Policy</span>
      </div>

      <p className="text-center text-gray-700 text-xs mt-4">
        Designed by Hexagon Digital Services
      </p>
    </footer>
  );
};

export default Footer;
