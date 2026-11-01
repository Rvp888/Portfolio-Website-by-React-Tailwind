// import Profile from "../assets/profilepic.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { HiOutlineDownload } from "react-icons/hi";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 md:px-16 flex items-center"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col gap-6 justify-center items-center h-full p-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl md:text-6xl font-bold text-white">
//             I’m a{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Front End
//             </span>{" "}
//             Developer
//           </h2>
//           <p className="text-gray-400 text-base sm:text-lg mt-5 leading-relaxed max-w-lg">
//             I design and develop clean, performant interfaces using React and
//             modern web technologies. With real-world experience on SaaS
//             products, I focus on turning complex requirements into intuitive,
//             production-ready UIs.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
//             {/* View Work */}
//             <Link to="projects" smooth duration={500}>
//               <button
//                 className="group
//                   w-full sm:w-auto
//                   flex items-center justify-center
//                   px-6 py-3
//                   text-white
//                   bg-gradient-to-r from-cyan-500 to-blue-500
//                   rounded-md
//                   hover:scale-105
//                   transition-all duration-300
//                 "
//               >
//                 View My Work
//                 <span className="group-hover:translate-x-1 group-hover:rotate-90 transition-transform duration-300">
//                   <MdOutlineKeyboardArrowRight size={22} />
//                 </span>
//               </button>
//             </Link>

//             {/* Download Resume */}
//             <a
//               href="/Rohan_Palankar_Resume.pdf"
//               download
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 group
//                 w-full sm:w-auto
//                 flex items-center justify-center gap-2
//                 px-6 py-3
//                 border border-cyan-500
//                 text-cyan-500
//                 rounded-md
//                 hover:bg-cyan-500/80 hover:text-black
//                 hover:scale-105
//                 transition-all duration-300
//               "
//             >
//               Resume <HiOutlineDownload size={18} />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           {/* Gradient Glow */}
//           <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 blur-2xl opacity-30"></div>

//           <img
//             src={Profile}
//             alt="profile"
//             className="relative w-60 h-72 md:w-72 md:h-80 object-cover rounded-xl
//             border border-gray-700 shadow-xl
//             hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// Updated Version

import React from "react";
import Profile from "../assets/profilepic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";

const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      name="home"
      className="hero-section relative min-h-screen w-full overflow-hidden
      bg-gradient-to-b from-black via-black to-gray-900
      px-6 md:px-12 lg:px-16"
    >
      {/* Background Effects */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />

      {/* Main Content */}
      <div
        className="relative z-[1] mx-auto grid min-h-screen
        w-full max-w-[1140px] grid-cols-1 items-center
        gap-12 px-6 py-28
        lg:grid-cols-[minmax(0,680px)_390px]
        lg:justify-center lg:gap-[70px]"
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-2xl flex-col
          items-center text-center md:items-start md:text-left"
        >
          {/* Professional Label */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-cyan-400" />

            <span
              className="text-xs font-semibold tracking-[0.22em]
            text-cyan-400 sm:text-sm"
            >
              FRONTEND DEVELOPER · REACT.JS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-[1.15]
            tracking-tight text-white sm:text-5xl
            lg:text-7xl"
          >
            Frontend
            <br />
            <span
              className="bg-gradient-to-r from-cyan-400
            via-sky-400 to-blue-500 bg-clip-text text-transparent"
            >
              Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-xl text-base leading-8
            text-gray-400 sm:text-lg"
          >
            I build responsive, scalable and user-focused web applications using
            React and modern frontend technologies. Experienced in developing
            enterprise SaaS interfaces and transforming complex requirements
            into intuitive user experiences.
          </motion.p>

          {/* Professional Status */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-2 text-sm
            text-gray-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full
              animate-ping rounded-full bg-emerald-400 opacity-50"
              />

              <span
                className="relative inline-flex h-2.5 w-2.5
              rounded-full bg-emerald-400"
              />
            </span>
            Open to Frontend Developer opportunities
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex w-full flex-col gap-4
            sm:w-auto sm:flex-row"
          >
            {/* View Projects */}
            <Link to="projects" smooth duration={500}>
              <motion.button
                type="button"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -3,
                        scale: 1.02,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.97,
                      }
                }
                className="group flex w-full items-center
                justify-center gap-1 rounded-lg
                bg-gradient-to-r from-cyan-500 to-blue-500
                px-7 py-3.5 font-medium text-white
                shadow-lg shadow-cyan-500/10
                transition-shadow duration-300
                hover:shadow-cyan-500/30 sm:w-auto"
              >
                View Projects
                <MdOutlineKeyboardArrowRight
                  size={23}
                  className="transition-transform duration-300
                  group-hover:translate-x-1"
                />
              </motion.button>
            </Link>

            {/* Download Resume */}
            <motion.a
              href="/Rohan_Palankar_Resume.pdf"
              download
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -3,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 0.97,
                    }
              }
              className="group flex w-full items-center
              justify-center gap-2 rounded-lg
              border border-cyan-500/60 px-7 py-3.5
              font-medium text-cyan-400
              transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-400/10
              sm:w-auto"
            >
              Resume
              <HiOutlineDownload
                size={19}
                className="transition-transform duration-300
                group-hover:translate-y-0.5"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.3,
            ease: "easeOut",
          }}
          className="relative flex w-full items-center justify-center"
        >
          {/* Ambient Glow Behind Image */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.08],
                    opacity: [0.55, 0.8],
                  }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute h-[300px] w-[260px]
    rounded-full bg-cyan-500/20 blur-[85px]
    sm:h-[400px] sm:w-[350px]"
          />

          {/* Secondary Blue Glow */}
          <div
            className="absolute -right-8 top-1/4
    h-48 w-48 rounded-full bg-blue-600/15
    blur-[90px]"
          />

          {/* Floating Profile Image */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -12],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.035,
                    rotateY: -3,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }
            }
            className="relative z-[1] cursor-default"
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={Profile}
              alt="Portrait of Rohan Palankar"
              className="h-72 w-64 rounded-2xl
      object-cover object-center
      sm:h-80 sm:w-72
      md:h-[22rem] md:w-80"
              style={{
                boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.65),
          0 0 35px rgba(34, 211, 238, 0.12),
          0 0 80px rgba(37, 99, 235, 0.08)
        `,
              }}
            />
          </motion.div>

          {/* Soft Light Beneath Image */}
          <div
            className="absolute bottom-[-20px] left-1/2
    h-8 w-48 -translate-x-1/2
    rounded-full bg-cyan-400/20
    blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
