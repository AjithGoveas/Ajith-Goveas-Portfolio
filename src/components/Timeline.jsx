import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Ensure correct path
import { collection, onSnapshot } from "firebase/firestore";

function Timeline() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-5">Loading projects...</p>
    );
  }

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-8 md:px-20 text-white">
      {/* Timeline Vertical Line (Hidden on Small Screens) */}
      <div className="absolute hidden md:block top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

      {/* Timeline Entries */}
      <div className="max-w-4xl mx-auto relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative flex flex-col md:flex-row items-center md:items-start mb-16"
          >
            {/* Timeline Dot (Hidden on Small Screens) */}
            <div className="absolute hidden md:block md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-blue-500 border-4 border-white rounded-full z-10"></div>

            {/* Entry Content (Responsive Positioning) */}
            <div
              className={`relative w-full md:max-w-md bg-zinc-700 p-6 rounded-lg shadow-lg text-center ${
                index % 2 === 0
                  ? "md:ml-auto md:text-left md:translate-x-10"
                  : "md:mr-auto md:text-right md:-translate-x-10"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold">{project.year}</h3>
              <h4 className="text-lg md:text-xl text-blue-400 mt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h4>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-semibold bg-blue-600 text-white rounded-md cursor-pointer hover:scale-105 transition ease-in-out duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
