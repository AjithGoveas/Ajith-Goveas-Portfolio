import React, { useState, useEffect } from "react";
import smoothScroll from "./SmoothScroll.jsx";
import { BiMenu, BiX } from "react-icons/bi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = { root: null, threshold: 0.4 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in ${
        isScrolled ? "bg-neutral-800 py-[1%] shadow-md" : "bg-transparent px-20 py-[2%]"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="font-[Sofia] text-white text-3xl font-bold select-none">
          myBio
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { id: "hero", name: "Home" },
            { id: "about", name: "About" },
            { id: "projects", name: "Projects" },
            { id: "contact", name: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => smoothScroll(item.id)}
              className={`cursor-pointer text-gray-300 text-lg transition-colors duration-300 hover:text-white ${
                activeSection === item.id
                  ? "text-white border-b-2 border-white pb-1"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[50%] bg-neutral-900 p-6 flex flex-col items-center space-y-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="text-white"
          onClick={() => setMenuOpen(false)}
        >
          <BiX size={35} />
        </button>
        {[
            { id: "hero", name: "Home" },
            { id: "about", name: "About" },
            { id: "projects", name: "Projects" },
            { id: "contact", name: "Contact" },
          ].map((item) => (
          <a
            key={item.id}
            onClick={() => {
              smoothScroll(item.id);
              setMenuOpen(false);
            }}
            className={`cursor-pointer mt-2 text-gray-300 text-2xl transition-colors duration-300 hover:text-white ${
              activeSection === item.id
                ? "text-white border-b-2 border-white pb-1"
                : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
