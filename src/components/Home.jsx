import React from "react";
// import Profile from "../assets/profile-new.png";
// import Profile from "../assets/profile-new-2.png";
// import Profile from "../assets/profile-new-3.png";
// import Profile from "../assets/profile.png";
// import Profile from "../assets/profile-dev.png";
import Profile from "../assets/profilepic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 lg:px-16 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col gap-6 justify-center items-center h-full p-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            I’m a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Front End
            </span>{" "}
            Developer
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-5 leading-relaxed max-w-lg">
            I design and develop clean, performant interfaces using React and
            modern web technologies. With real-world experience on SaaS
            products, I focus on turning complex requirements into intuitive,
            production-ready UIs.
          </p>

          {/* <div className="mt-8">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-md 
              bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium
              hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30
              transition-all duration-300 cursor-pointer"
            >
              View My Work
              <span className="group-hover:translate-x-1 group-hover:rotate-90 transition-transform duration-300">
                <MdOutlineKeyboardArrowRight size={22} />
              </span>
            </Link>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* View Work */}
            <Link to="portfolio" smooth duration={500}>
              <button
                className="
                  group flex items-center justify-center
                  px-6 py-3
                  text-white
                  bg-gradient-to-r from-cyan-500 to-blue-500
                  rounded-md
                  hover:scale-105
                  transition-all duration-300
                "
              >
                View My Work
                <span className="group-hover:translate-x-1 group-hover:rotate-90 transition-transform duration-300">
                  <MdOutlineKeyboardArrowRight size={22} />
                </span>
              </button>
            </Link>

            {/* Download Resume */}
            <a
              href="/Rohan_Palankar_Resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-2
                px-6 py-3
                border border-cyan-400
                text-cyan-400
                rounded-md
                hover:bg-cyan-400 hover:text-black
                transition-all duration-300
              "
            >
              Resume <HiOutlineDownload size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Gradient Glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 blur-2xl opacity-30"></div>

          <img
            src={Profile}
            alt="profile"
            className="relative w-60 h-72 md:w-72 md:h-80 object-cover rounded-xl
            border border-gray-700 shadow-xl
            hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
