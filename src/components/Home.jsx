import React from "react";
import HeroImg from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have more than a year of experience building softwares. Currently,
            I love to work on web application using technologies like React,
            Tailwind and Bootstrap.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-1/2 md:w-96 mx-auto rounded-2xl"
            src={HeroImg}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
