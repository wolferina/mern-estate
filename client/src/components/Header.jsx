import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 self">
        <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex-wrap">
          <span className="text-slate-500">CT</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="search..."
          />
          <FaSearch className="text-slate-600 " />
        </form>
      <ul className="flex gap-4">
        <Link to="/">
        <li className="hidden sm:inline text-slate-700 hover:text-slate-500 hover hover:underline">Home</li>
        </Link>
        <Link to="/about">
        <li className="hidden sm:inline text-slate-700 hover:text-slate-500 hover hover:underline">About</li>
        </Link>
        <Link to="/sign-in">
        <li className="text-slate-700 hover:text-slate-500 hover hover:underline">Sign In</li>
        </Link>
      </ul>
      </div>
    </header>
  );
}
