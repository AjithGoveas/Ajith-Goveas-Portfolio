import React from "react";
import smoothScroll from "../components/SmoothScroll.jsx";
import { BiLogoInstagram } from "react-icons/bi";

function Hero({ name }) {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-screen bg-transparent px-4"
    >
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Image Section */}
        <div className="image p-4 flex items-center justify-center">
          <BiLogoInstagram color="white" size={250} />
        </div>
        {/* Text Section */}
        <div className="text p-4 flex flex-col justify-center text-center md:text-left">
          <span className="bg-white inline-block w-24 h-2 mb-4 mx-auto md:mx-0"></span>
          <h1 className="text-white leading-tight text-4xl md:text-6xl font-bold mb-4">
            Nice to meet you, I'm <b className="text-blue-500">{name}</b>
          </h1>
          <p className="text-zinc-400 leading-7 md:leading-8 text-base md:text-lg mb-4">
            Hello! I'm a <b className="text-white">Frontend Developer</b>{" "}
            skilled in <b className="text-blue-400">React</b>,{" "}
            <b className="text-blue-400">Next.js</b>, and{" "}
            <b className="text-blue-400">Tailwind CSS</b>. I craft seamless user
            experiences and am currently expanding my expertise into{" "}
            <b className="text-white">Full-Stack Development</b> and{" "}
            <b className="text-blue-400">Android app development</b> using{" "}
            <b>Kotlin</b> and <b>Jetpack Compose</b>. Let's build something
            exceptional together.
          </p>
          <button
            onClick={(e) => smoothScroll("projects", e)}
            className="inline-block w-full sm:w-full md:w-full lg:w-60 mt-4 px-6 py-3 text-sm md:text-lg bg-transparent text-white font-bold border-2 border-neutral-700 rounded-lg hover:bg-neutral-700 cursor-pointer transition duration-300"
          >
            View My Projects
          </button>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements flex justify-center items-center mt-8 bg-neutral-700 text-white py-6 px-6 w-full rounded">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center w-full">
          <div className="border-b sm:border-b-0 sm:border-r px-4 pb-4 sm:pb-0">
            <span className="text-3xl md:text-4xl font-bold">2+</span>
            <p className="text-sm md:text-base">Projects Completed</p>
          </div>
          <div className="border-b sm:border-b-0 sm:border-r px-4 pb-4 sm:pb-0">
            <span className="text-3xl md:text-4xl font-bold">2</span>
            <p className="text-sm md:text-base">Years of Experience</p>
          </div>
          <div className="px-4">
            <span className="text-3xl md:text-4xl font-bold">0</span>
            <p className="text-sm md:text-base">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
