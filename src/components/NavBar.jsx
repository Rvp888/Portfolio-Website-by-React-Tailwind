// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = nav ? "hidden" : "auto";
//   }, [nav]);

//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "projects",
//     },
//     {
//       id: 4,
//       link: "skills",
//     },
//     {
//       id: 5,
//       link: "experience",
//     },
//     {
//       id: 6,
//       link: "contact",
//     },
//   ];

//   return (
//     <div
//       className="flex justify-between items-center w-full px-4 h-20 bg-black/80 backdrop-blur-md
//     text-white fixed z-10 border-b border-white/10"
//     >
//       <h1 className="ml-2 pt-3 text-4xl font-signature">Rohan</h1>

//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
//           >
//             <Link
//               to={link}
//               smooth
//               duration={500}
//               spy={true}
//               offset={-80}
//               className="text-gray-200"
//               activeClass="text-gray-100-i font-bold border-b-2 border-cyan-400"
//             >
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div
//         onClick={() => setNav(!nav)}
//         className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
//             >
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//                 spy={true}
//                 offset={-80}
//                 activeClass="text-cyan-400"
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  // Close mobile menu when navigating
  const closeMenu = () => setNav(false);

  return (
    <>
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 z-50 w-full
        border-b border-white/[0.08]
        bg-black/80 backdrop-blur-xl
        transition-all duration-300"
      >
        <nav
          className="mx-auto flex h-[88px] w-full
          items-center justify-between
          px-5 sm:px-8 lg:px-12"
        >
          {/* LOGO */}
          <Link
            to="home"
            smooth
            duration={500}
            spy
            offset={-80}
            onClick={closeMenu}
            className="group cursor-pointer"
          >
            <h1
              className="font-signature text-4xl
              text-white transition-all duration-300
              group-hover:text-cyan-400
              sm:text-[42px]"
            >
              Rohan
            </h1>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden items-center gap-1 md:flex lg:gap-2">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy
                  offset={-90}
                  activeClass="nav-active"
                  className="
                    nav-link
                    relative
                    inline-block
                    cursor-pointer
                    px-3 py-2
                    text-[15px]
                    font-medium
                    capitalize
                    tracking-wide
                    text-gray-300
                    transition-colors
                    duration-300
                    hover:text-cyan-300
                    lg:px-4
                    lg:text-base
                  "
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setNav(!nav)}
            aria-label={nav ? "Close navigation" : "Open navigation"}
            aria-expanded={nav}
            className="relative z-[60] flex h-11 w-11
            items-center justify-center rounded-xl
            border border-white/10 bg-white/[0.04]
            text-white transition-all duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            md:hidden"
          >
            {nav ? (
              <X size={24} className="text-cyan-400" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>
      </header>

      {/* MOBILE NAVIGATION OVERLAY */}
      <div
        className={`fixed inset-0 z-40
        bg-black/95 backdrop-blur-2xl
        transition-all duration-500
        md:hidden
        ${
          nav
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative Glow */}
        <div
          className="pointer-events-none absolute
          left-1/2 top-1/3 h-72 w-72
          -translate-x-1/2 rounded-full
          bg-cyan-500/10 blur-[100px]"
        />

        {/* Mobile Links */}
        <ul
          className="relative flex h-full
          flex-col items-center justify-center
          gap-3 px-6"
        >
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className={`w-full max-w-sm
              transition-all duration-500
              ${nav ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              style={{
                transitionDelay: nav ? `${index * 70}ms` : "0ms",
              }}
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy
                offset={-80}
                onClick={closeMenu}
                activeClass="nav-active"
                className="group flex items-center
                justify-between rounded-xl
                border border-transparent
                px-6 py-4 text-2xl font-medium
                capitalize text-gray-300
                transition-all duration-300
                hover:border-cyan-400/20
                hover:bg-white/[0.04]
                hover:text-cyan-400"
              >
                <span>{link}</span>

                <ArrowUpRight
                  size={20}
                  className="text-cyan-400/50
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-cyan-400"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="absolute bottom-8 left-0
          w-full text-center"
        >
          <p
            className="text-xs tracking-[0.25em]
            text-gray-500"
          >
            FRONTEND DEVELOPER · REACT.JS
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
