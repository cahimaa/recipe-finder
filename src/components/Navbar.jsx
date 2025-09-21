import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-purple-600">
          Chaimaa<span className="text-pink-400">.</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-purple-600">Home</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>

        {/* Bouton Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a href="#home" className="block hover:text-purple-600">Home</a>
          <a href="#about" className="block hover:text-purple-600">About</a>
          <a href="#skills" className="block hover:text-purple-600">Skills</a>
          <a href="#projects" className="block hover:text-purple-600">Projects</a>
          <a href="#contact" className="block hover:text-purple-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
