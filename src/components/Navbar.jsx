import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkClass = (id) =>
    activeSection === id
      ? "text-yellow-600 font-bold"
      : "text-yellow-600 hover:text-gray-300 font-bold";

  return (
    <nav className="bg-transparent p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
        <img src="/logo.png" alt="Mon Logo" className="h-12 w-auto" />
      </div>

      <ul className="flex space-x-8 text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
        {/* Scroll links */}
        <li>
          <HashLink smooth to="/#hero" className={linkClass("hero")}>
            Accueil
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about" className={linkClass("about")}>
            À propos
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" className={linkClass("contact")}  >
            Contact
          </HashLink>
        </li>

        {/* Separate page */}
        <li>
          <Link to="/recette" className="text-yellow-600 hover:text-gray-300 font-bold">
            Recettes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
