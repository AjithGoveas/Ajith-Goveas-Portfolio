import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
} from "react-icons/bi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Form submitted!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="text-white py-10 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto bg-zinc-700 shadow-md rounded-md p-6 sm:p-8">
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-zinc-400 mt-3">
              Have some big idea or brand to develop and need help? Reach
              out—I'd love to hear about your project.
            </p>

            {/* Email Section */}
            <div className="mt-8">
              <h2 className="text-lg font-extrabold">Email</h2>
              <div className="flex items-center mt-3">
                <div className="h-10 w-10 flex items-center justify-center border rounded-xl">
                  <BiLogoGmail className="text-2xl text-white" />
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm ml-3"
                >
                  <small className="block text-white">Mail</small>
                  <strong>{"Not Available"}</strong>
                </a>
              </div>
            </div>

            {/* Socials Section */}
            <div className="mt-8">
              <h2 className="text-lg font-extrabold">Socials</h2>
              <div className="flex space-x-4 mt-3">
                {[
                  BiLogoFacebookCircle,
                  BiLogoInstagram,
                  BiLogoLinkedin,
                  BiLogoGithub,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center text-gray-300 text-3xl
                      transition-all duration-200 ease-in hover:-translate-y-2 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md py-2.5 px-4 border text-sm bg-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md py-2.5 px-4 border text-sm bg-transparent"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md py-2.5 px-4 border text-sm bg-transparent"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md px-4 border text-sm pt-2.5 bg-transparent"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:scale-105 font-semibold rounded-md text-sm px-4 py-2.5 w-full
              transition-transform duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
