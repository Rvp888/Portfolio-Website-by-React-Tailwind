import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import reactQuery from "../assets/react-query.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import nextJS from "../assets/nextjs.png";
import nodeJS from "../assets/node.png";
import expressJS from "../assets/ExpressJS-Dark.svg";
import mongodb from "../assets/mongodb.svg";
import styledcomponents from "../assets/styledcomponents.svg";
// import git from "../assets/git.png";
// import supabase from "../assets/supabase.png";
// import github from "../assets/github.png";
// import jQuery from "../assets/jQuery.png";
// import sass from "../assets/sass.png";
// import expressJS from "../assets/exjs.png";
// import mySQL from "../assets/mySql-1.svg";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500/40 hover:shadow-orange-500/60",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400/40 hover:shadow-blue-400/60",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400/40 hover:shadow-yellow-400/60",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-400/40 hover:shadow-sky-400/60",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-violet-600/40 hover:shadow-violet-600/60",
    },
    {
      id: 6,
      src: reactQuery,
      title: "React Query",
      style: "shadow-red-500/40 hover:shadow-red-500/60",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400/40 hover:shadow-sky-400/60",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-indigo-500/40 hover:shadow-indigo-500/60",
    },
    {
      id: 9,
      src: nextJS,
      title: "Next JS",
      style: "shadow-gray-400/40 hover:shadow-gray-400/60",
    },
    {
      id: 10,
      src: nodeJS,
      title: "Node JS",
      style: "shadow-lime-400/40 hover:shadow-lime-400/60",
    },
    {
      id: 11,
      src: expressJS,
      title: "Express JS",
      style: "shadow-gray-400/40 hover:shadow-gray-400/60",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-lime-600/40 hover:shadow-lime-600/60",
    },
    // {
    //   id: 13,
    //   src: mySQL,
    //   title: "MySQL",
    //   style: "shadow-blue-400/40 hover:shadow-blue-400/60",
    // },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full px-4 md:px-16 min-h-[90vh] flex items-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-16 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div> */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-6">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`
                rounded-xl
                border border-white/10
                bg-gradient-to-b from-white/5 to-white/0
                backdrop-blur
                p-5
                flex flex-col items-center justify-center
                shadow-sm
                hover:shadow-md
                transition-all duration-300 ease-out
                transform-gpu will-change-transform
                hover:-translate-y-0.5
                ${style}
              `}
            >
              <img src={src} alt={title} className="w-14 sm:w-16 mb-4" />
              <p className="text-sm sm:text-base font-medium text-gray-200 tracking-wide">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
