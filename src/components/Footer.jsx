import smoothScroll from "./SmoothScroll.jsx";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

function Footer({ name }) {
  const Name = name;

  return (
    <footer className="footer bottom-0 left-0 w-full px-8 sm:px-12 md:px-16 lg:px-20 py-[2%] bg-neutral-800 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="footer-content text-center md:text-left">
          <h3 className="logo font-[Sofia] text-3xl sm:text-4xl mb-4 md:mb-8 text-white select-none">
            myBio
          </h3>
          <p className="text-sm sm:text-base leading-6">
            Experience the fusion of innovation and comfort with our company,
            where every booking is the beginning of an unforgettable journey.
          </p>
          <div className="icons mt-4 p-2 flex justify-center md:justify-start space-x-4">
            {[
              { icon: <BiLogoFacebookCircle />, link: "#" },
              { icon: <BiLogoInstagram />, link: "#" },
              { icon: <BiLogoLinkedin />, link: "#" },
              { icon: <BiLogoGithub />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-2xl sm:text-3xl transition-all duration-200 ease-in lg:hover:-translate-y-2 lg:hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-content text-center md:text-left">
          <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
            Quick Links
          </h4>
          <ul className="space-y-1 sm:space-y-2">
            {[
              { id: "hero", name: "Home" },
              { id: "about", name: "About" },
              { id: "projects", name: "Projects" },
              { id: "contact", name: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => smoothScroll(item.id)}
                  className="text-gray-300 hover:text-white cursor-pointer text-sm sm:text-base"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright text-center mt-6 sm:mt-8 text-sm sm:text-base">
        <p>
          &copy; {new Date().getFullYear()} {Name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
