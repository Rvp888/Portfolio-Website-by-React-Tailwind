import React from "react";
import Profile from "../assets/profilephoto.jpg";
import ProfilePic from "../assets/profilepicture.png";
import HeroImg from "../assets/heroImage.jpg";
import HeroImg2 from "../assets/heroImage-2.jpg";
import HeroImg3 from "../assets/heroImage-3.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 p-4 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I design and develop clean, performant interfaces using React and
            modern web technologies. With real-world experience on SaaS
            products, I focus on turning complex requirements into intuitive,
            production-ready UIs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              View My Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            className="w-56 h-72 md:w-72 mx-auto rounded-lg"
            src={Profile}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
