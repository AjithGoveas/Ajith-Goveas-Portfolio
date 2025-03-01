import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Ensure correct path
import { doc, getDoc } from "firebase/firestore";

function About() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch skills from Firestore
    const fetchSkills = async () => {
      try {
        const docRef = doc(db, "socialLinks", "me"); // Path to your document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSkills(docSnap.data().skills || []); // Ensure it handles undefined cases
        } else {
          console.log("No skills found in Firestore!");
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen w-full py-20 bg-transparent text-white"
    >
      <div className="container mx-auto px-6 md:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-10">
          About Me
        </h2>

        {/* Bio & Skills */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Bio Text */}
          <div className="w-full md:w-2/3">
            <p className="text-gray-300 leading-relaxed text-lg">
              Hi! I'm a <b>Frontend Developer</b> student, currently exploring
              and studying <b>Full-Stack Development</b>. I have a strong
              passion for <b>creating intuitive and engaging user interfaces</b>
              . Alongside web development, I'm also delving into{" "}
              <b>Android app development using Kotlin and Jetpack Compose</b>,
              while experimenting with <b>multiplatform development</b> to build
              scalable and efficient applications.
            </p>

            {/* Key Highlights */}
            <ul className="mt-6 space-y-2 text-gray-300">
              <li>
                🚀 Learning and building projects with{" "}
                <b>React, Next.js, and Tailwind CSS</b>
              </li>
              <li>
                💡 Exploring <b>backend development</b> with{" "}
                <b>Node.js, Express, and MongoDB</b>
              </li>
              <li>
                📱 Developing <b>Android apps</b> using{" "}
                <b>Kotlin & Jetpack Compose</b>
              </li>
              <li>
                🔗 Trying <b>multiplatform development</b> for efficient scaling
                across web and mobile
              </li>
              <li>
                🎨 Passionate about <b>UI/UX design</b>, focusing on clean and
                interactive user experiences
              </li>
            </ul>
          </div>

          {/* Skills Grid */}
          <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
            {loading ? (
              <p className="text-gray-400 text-center col-span-2">
                Loading skills...
              </p>
            ) : skills.length > 0 ? (
              skills.map((skill, index) => (
                <span
                  key={index}
                  className="cursor-pointer px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg transition-transform duration-300 hover:scale-105 text-center"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-2">
                No skills found
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
