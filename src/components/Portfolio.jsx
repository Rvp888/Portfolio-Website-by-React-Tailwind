import React from "react";
import nagakhel from "../assets/naga-khel.png";
import notesApp from "../assets/notes-app.png";
import stopWatch from "../assets/Stop Watch App.png";
import eCart from "../assets/E-Cart App.png";
import weatherApp from "../assets/weather-app.png";
import todoApp from "../assets/Todo App.png";
import drawingApp from "../assets/Drawing App.png";
import budgetApp from "../assets/Budget App.png";
import ticTacToe from "../assets/Tic-Tac-Toe game.png";
import calculator from "../assets/Calculator.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nagakhel,
      demo: "https://naga-khel-u6a7.vercel.app/",
      code: "https://github.com/Rvp888/Naga-Khel",
    },
    {
      id: 2,
      src: eCart,
      demo: "https://ecom-site-six.vercel.app/",
      code: "https://github.com/Rvp888/Ecom-site",
    },
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
    //   src: stopWatch,
    //   demo: "https://stop-watch-ruddy.vercel.app/",
    //   code: "https://github.com/Rvp888/Stop-Watch"
    // },
    // {
    //   id: 7,
    //   src: todoApp,
    //   demo: "https://react-basic-todo-app.vercel.app/",
    //   code: "https://github.com/Rvp888/React-Basic-Todo-App"
    // },
    // {
    //   id: 8,
    //   src: budgetApp,
    //   demo: "https://app-landing-page-msrz.vercel.app/",
    //   code: "https://github.com/Rvp888/Budget-App",
    // },
    {
      id: 9,
      src: ticTacToe,
      demo: "https://tic-tac-toe-by-js.vercel.app/",
      code: "https://github.com/Rvp888/Tic-Tac-Toe-by-JS",
    },
    // {
    //   id: 10,
    //   src: calculator,
    //   demo: "https://calculator-rvp888.vercel.app/",
    //   code: "https://github.com/Rvp888/Calculator"
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-16 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-3/4 rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6  m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6  m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
