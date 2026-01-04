import React from "react";
import nagakhel from "../assets/naga-khel.png";
import notesApp from "../assets/notes-app.png";
import eCart from "../assets/E-Cart App.png";
import weatherApp from "../assets/weather-app.png";
import drawingApp from "../assets/Drawing App.png";
import budgetApp from "../assets/Budget App.png";
import ticTacToe from "../assets/Tic-Tac-Toe game.png";
import calculator from "../assets/Calculator.png";

const Portfolio = () => {
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: nagakhel,
  //     demo: "https://naga-khel-u6a7.vercel.app/",
  //     code: "https://github.com/Rvp888/Naga-Khel",
  //   },
  //   {
  //     id: 2,
  //     src: eCart,
  //     demo: "https://ecom-site-six.vercel.app/",
  //     code: "https://github.com/Rvp888/Ecom-site",
  //   },
  // {
  //   id: 3,
  //   src: drawingApp,
  //   demo: "https://drawing-app-mu.vercel.app/",
  //   code: "https://github.com/Rvp888/Drawing-App",
  // },
  // {
  //   id: 4,
  //   src: notesApp,
  //   demo: "https://react-notes-app-azure.vercel.app/",
  //   code: "https://github.com/Rvp888/React-Notes-App",
  // },
  // {
  //   id: 5,
  //   src: weatherApp,
  //   demo: "https://react-weather-app-2-psi.vercel.app/",
  //   code: "https://github.com/Rvp888/React-Weather-App-2",
  // },
  // {
  //   id: 6,
  //   src: budgetApp,
  //   demo: "https://app-landing-page-msrz.vercel.app/",
  //   code: "https://github.com/Rvp888/Budget-App",
  // },
  // {
  //   id: 7,
  //   src: ticTacToe,
  //   demo: "https://tic-tac-toe-by-js.vercel.app/",
  //   code: "https://github.com/Rvp888/Tic-Tac-Toe-by-JS",
  // },
  // {
  //   id: 8,
  //   src: calculator,
  //   demo: "https://calculator-rvp888.vercel.app/",
  //   code: "https://github.com/Rvp888/Calculator"
  // },
  // ];

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

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white px-4 min-h-[85vh] flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(
            ({ id, title, image, description, tech, live, github }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-500 rounded-lg flex flex-col"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 rounded-md duration-200 hover:scale-105"
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

                {/* <div className="flex items-center justify-center">
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6  m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6  m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div> */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// ============================================================================================
