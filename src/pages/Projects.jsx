import React from "react";
import Timeline from "../components/Timeline.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full py-20 bg-transparent text-white"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-10">
        Projects Timeline
      </h2>
      <Timeline />
    </section>
  );
}

export default Projects;
