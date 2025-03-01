import React, { useState, useEffect, useRef, useCallback } from "react";
import smoothScroll from "./SmoothScroll.jsx";
import { BiMenu, BiX } from "react-icons/bi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null); // Store observer instance

  // Handle scroll to update navbar background
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth scroll handler
  const handleSmoothScroll = (id, event) => {
    smoothScroll(id, event);
    setTimeout(() => setActiveSection(id), 600);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menu = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  // Set up Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      handleObserver,
      observerOptions
    );

    // Observe all sections
    menu.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [menu]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-zinc-800 py-3" : "bg-transparent py-5 px-20"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-3xl font-[Sofia] font-bold select-none">
          myBio
        </div>

        <nav className="hidden md:flex space-x-8">
          {menu.map((item) => (
            <a
              key={item.id}
              onClick={(e) => handleSmoothScroll(item.id, e)}
              className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-white text-black shadow-md"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 flex justify-end transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <div className="w-3/5 bg-neutral-900 p-6 flex flex-col items-center space-y-6">
          <button
            className="text-white self-end"
            onClick={() => setMenuOpen(false)}
          >
            <BiX size={35} />
          </button>
          {menu.map((item) => (
            <a
              key={item.id}
              onClick={(e) => {
                handleSmoothScroll(item.id, e);
                setMenuOpen(false);
              }}
              className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-white text-black shadow-md"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
