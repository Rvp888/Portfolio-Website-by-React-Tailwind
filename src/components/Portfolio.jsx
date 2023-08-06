import React from "react";
import nagakhel from "../assets/naga-khel.png";
import notesApp from "../assets/notes-app.png";
import stopWatch from "../assets/Stop Watch App.png";
import eCart from "../assets/E-Cart App.png";
import weatherApp from "../assets/weather-app.png";
import reactParallax from "../assets/reactParallax.jpg";
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
    },
    {
      id: 2,
      src: eCart,
    },
    {
      id: 3,
      src: drawingApp,
    },
    {
      id: 4,
      src: notesApp,
    },
    {
      id: 5,
      src: weatherApp,
    },
    {
      id: 6,
      src: stopWatch,
    },
    {
      id: 7,
      src: todoApp,
    },
    {
      id: 8,
      src: budgetApp,
    },
    {
      id: 9,
      src: ticTacToe,
    },
    {
      id: 10,
      src: calculator,
    },
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
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-3/4 rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6  m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6  m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
