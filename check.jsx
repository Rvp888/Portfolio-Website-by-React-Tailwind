import React from "react";
import nagakhel from "../assets/naga-khel.png";
import eCart from "../assets/E-Cart App.png";
import ticTacToe from "../assets/Tic-Tac-Toe game.png";

const projects = [
  {
    id: 1,
    title: "Naga Khel",
    image: nagakhel,
    description:
      "An interactive gaming platform with modern UI and responsive design.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://naga-khel-u6a7.vercel.app/",
    github: "https://github.com/Rvp888/Naga-Khel",
  },
  {
    id: 2,
    title: "E-Commerce App",
    image: eCart,
    description:
      "A fully responsive e-commerce frontend with product listing and cart flow.",
    tech: ["React", "CSS", "JavaScript"],
    live: "https://ecom-site-six.vercel.app/",
    github: "https://github.com/Rvp888/Ecom-site",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    image: ticTacToe,
    description:
      "Classic Tic Tac Toe game built using core JavaScript logic and clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tic-tac-toe-by-js.vercel.app/",
    github: "https://github.com/Rvp888/Tic-Tac-Toe-by-JS",
  },
];

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Projects
          </h2>
          <p className="text-gray-400 mt-4">
            Some of the work I’ve built using modern frontend technologies
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ id, title, image, description, tech, live, github }) => (
              <div
                key={id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col h-[480px]"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>

                  <p className="text-gray-400 text-sm mb-4">{description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-gray-700 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-4">
                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>

                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 rounded-lg border border-gray-500 hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
