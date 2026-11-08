// import React from "react";
// import Profile from "../assets/profilepic.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { HiOutlineDownload } from "react-icons/hi";
// import { Link } from "react-scroll";
// import { motion, useReducedMotion } from "framer-motion";

// const Home = () => {
//   const shouldReduceMotion = useReducedMotion();

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: shouldReduceMotion ? 0 : 24,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: shouldReduceMotion ? 0 : 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       name="home"
//       className="hero-section relative min-h-screen w-full overflow-hidden
//       bg-gradient-to-b from-black via-black to-gray-900
//       px-6 md:px-12 lg:px-16"
//     >
//       {/* Background Effects */}
//       <div className="hero-glow hero-glow-one" />
//       <div className="hero-glow hero-glow-two" />
//       <div className="hero-grid" />

//       {/* Main Content */}
//       <div
//         className="relative z-[1] mx-auto grid min-h-screen
//         w-full max-w-[1140px] grid-cols-1 items-center
//         gap-12 px-6 py-28
//         lg:grid-cols-[minmax(0,680px)_390px]
//         lg:justify-center lg:gap-[70px]"
//       >
//         {/* LEFT CONTENT */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex w-full max-w-2xl flex-col
//           items-center text-center md:items-start md:text-left"
//         >
//           {/* Professional Label */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-6 flex items-center gap-3"
//           >
//             <span className="h-[2px] w-8 bg-cyan-400" />

//             <span
//               className="text-xs font-semibold tracking-[0.22em]
//             text-cyan-400 sm:text-sm"
//             >
//               FRONTEND DEVELOPER · REACT.JS
//             </span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold leading-[1.15]
//             tracking-tight text-white sm:text-5xl
//             lg:text-7xl"
//           >
//             Frontend
//             <br />
//             <span
//               className="bg-gradient-to-r from-cyan-400
//             via-sky-400 to-blue-500 bg-clip-text text-transparent"
//             >
//               Developer
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-7 max-w-xl text-base leading-8
//             text-gray-400 sm:text-lg"
//           >
//             I build responsive, scalable and user-focused web applications using
//             React and modern frontend technologies. Experienced in developing
//             enterprise SaaS interfaces and transforming complex requirements
//             into intuitive user experiences.
//           </motion.p>

//           {/* Professional Status */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-6 flex items-center gap-2 text-sm
//             text-gray-400"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span
//                 className="absolute inline-flex h-full w-full
//               animate-ping rounded-full bg-emerald-400 opacity-50"
//               />

//               <span
//                 className="relative inline-flex h-2.5 w-2.5
//               rounded-full bg-emerald-400"
//               />
//             </span>
//             Open to Frontend Developer opportunities
//           </motion.div>

//           {/* Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex w-full flex-col gap-4
//             sm:w-auto sm:flex-row"
//           >
//             {/* View Projects */}
//             <Link to="projects" smooth duration={500} offset={-88}>
//               <motion.button
//                 type="button"
//                 whileHover={
//                   shouldReduceMotion
//                     ? {}
//                     : {
//                         y: -3,
//                         scale: 1.02,
//                       }
//                 }
//                 whileTap={
//                   shouldReduceMotion
//                     ? {}
//                     : {
//                         scale: 0.97,
//                       }
//                 }
//                 className="group flex w-full items-center
//                 justify-center gap-1 rounded-lg
//                 bg-gradient-to-r from-cyan-500 to-blue-500
//                 px-7 py-3.5 font-medium text-white
//                 shadow-lg shadow-cyan-500/10
//                 transition-shadow duration-300
//                 hover:shadow-cyan-500/30 sm:w-auto"
//               >
//                 View Projects
//                 <MdOutlineKeyboardArrowRight
//                   size={23}
//                   className="transition-transform duration-300
//                   group-hover:translate-x-1"
//                 />
//               </motion.button>
//             </Link>

//             {/* Download Resume */}
//             <motion.a
//               href="/Rohan_Palankar__Resume.pdf"
//               download
//               whileHover={
//                 shouldReduceMotion
//                   ? {}
//                   : {
//                       y: -3,
//                     }
//               }
//               whileTap={
//                 shouldReduceMotion
//                   ? {}
//                   : {
//                       scale: 0.97,
//                     }
//               }
//               className="group flex w-full items-center
//               justify-center gap-2 rounded-lg
//               border border-cyan-500/60 px-7 py-3.5
//               font-medium text-cyan-400
//               transition-all duration-300
//               hover:border-cyan-400 hover:bg-cyan-400/10
//               sm:w-auto"
//             >
//               Resume
//               <HiOutlineDownload
//                 size={19}
//                 className="transition-transform duration-300
//                 group-hover:translate-y-0.5"
//               />
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT PROFILE IMAGE */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: shouldReduceMotion ? 0 : 35,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: shouldReduceMotion ? 0 : 0.9,
//             delay: shouldReduceMotion ? 0 : 0.3,
//             ease: "easeOut",
//           }}
//           className="relative flex w-full items-center justify-center"
//         >
//           {/* Ambient Glow Behind Image */}
//           <motion.div
//             animate={
//               shouldReduceMotion
//                 ? {}
//                 : {
//                     scale: [1, 1.08],
//                     opacity: [0.55, 0.8],
//                   }
//             }
//             transition={{
//               duration: 3.5,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//             }}
//             className="absolute h-[300px] w-[260px]
//     rounded-full bg-cyan-500/20 blur-[85px]
//     sm:h-[400px] sm:w-[350px]"
//           />

//           {/* Secondary Blue Glow */}
//           <div
//             className="absolute -right-8 top-1/4
//     h-48 w-48 rounded-full bg-blue-600/15
//     blur-[90px]"
//           />

//           {/* Floating Profile Image */}
//           <motion.div
//             animate={
//               shouldReduceMotion
//                 ? {}
//                 : {
//                     y: [0, -12],
//                   }
//             }
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//             }}
//             whileHover={
//               shouldReduceMotion
//                 ? {}
//                 : {
//                     scale: 1.035,
//                     rotateY: -3,
//                     transition: {
//                       duration: 0.4,
//                       ease: "easeOut",
//                     },
//                   }
//             }
//             className="relative z-[1] cursor-default"
//             style={{
//               perspective: 1000,
//               transformStyle: "preserve-3d",
//             }}
//           >
//             <img
//               src={Profile}
//               alt="Portrait of Rohan Palankar"
//               className="h-72 w-64 rounded-2xl
//       object-cover object-center
//       sm:h-80 sm:w-72
//       md:h-[22rem] md:w-80"
//               style={{
//                 boxShadow: `
//           0 25px 50px -12px rgba(0, 0, 0, 0.65),
//           0 0 35px rgba(34, 211, 238, 0.12),
//           0 0 80px rgba(37, 99, 235, 0.08)
//         `,
//               }}
//             />
//           </motion.div>

//           {/* Soft Light Beneath Image */}
//           <div
//             className="absolute bottom-[-20px] left-1/2
//     h-8 w-48 -translate-x-1/2
//     rounded-full bg-cyan-400/20
//     blur-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Home;

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
        gap-8 px-2 pt-28 pb-10
        sm:gap-10 sm:px-6 sm:py-28
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

          {/* Mobile Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
            className="relative mt-6 mb-2 flex w-full
            items-center justify-center lg:hidden"
          >
            {/* Ambient Glow */}
            <div
              className="absolute h-48 w-48 rounded-full
              bg-cyan-500/20 blur-[70px]"
            />

            {/* Profile Image */}
            <img
              src={Profile}
              alt="Portrait of Rohan Palankar"
              className="relative z-[1] h-52 w-44 rounded-2xl
              object-cover object-center
              shadow-[0_20px_40px_-12px_rgba(0,0,0,0.65),0_0_30px_rgba(34,211,238,0.12)]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base leading-8
            text-gray-400 sm:mt-7 sm:text-lg"
          >
            I build responsive, scalable and user-focused web applications using
            React and modern frontend technologies. Experienced in developing
            enterprise SaaS interfaces and transforming complex requirements
            into intuitive user experiences.
          </motion.p>

          {/* Professional Status */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex items-center gap-2 text-sm
            text-gray-400 sm:mt-6"
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
            className="mt-6 flex w-full flex-col gap-4
            sm:mt-9 sm:w-auto sm:flex-row"
          >
            {/* View Projects */}
            <Link to="projects" smooth duration={500} offset={-88}>
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
              href="/Rohan_Palankar__Resume.pdf"
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

        {/* DESKTOP PROFILE IMAGE */}
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
          className="relative hidden w-full
          items-center justify-center lg:flex"
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
