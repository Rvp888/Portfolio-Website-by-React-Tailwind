// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { TbBrandLeetcode } from "react-icons/tb";

// const SocialLinks = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           LinkedIn <FaLinkedin size={30} />
//         </>
//       ),
//       href: "https://www.linkedin.com/in/rohan-palankar-0b55921a2/",
//       style: "rounded-tl-md lg:rounded-tr-md",
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           GitHub <FaGithub size={30} />
//         </>
//       ),
//       href: "https://github.com/Rvp888",
//     },
//     // {
//     //   id: 3,
//     //   child: (
//     //     <>
//     //       Leetcode <TbBrandLeetcode size={30} />
//     //     </>
//     //   ),
//     //   href: "https://leetcode.com/RohanPalankar/",
//     // },
//     {
//       id: 4,
//       child: (
//         <>
//           Mail <HiOutlineMail size={30} />
//         </>
//       ),
//       href: "mailto:rohanpalankar8@gmail.com",
//       style: "rounded-tr-md lg:rounded-tr-none lg:rounded-br-md",
//     },
//   ];

//   return (
//     <div className="w-full flex justify-center lg:flex-col bottom-0 lg:left-0 lg:w-auto lg:h-screen fixed">
//       <ul className="flex lg:flex-col">
//         {links.map(({ id, child, href, style, download }) => (
//           <li
//             key={id}
//             className={`flex items-center w-20 h-20 lg:w-40 lg:h-14 py-2 px-6 lg:p-4 lg:pl-6 mb-[-30px] lg:mb-0 lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 lg:hover:rounded-md bg-gray-700 bg-opacity-70 ${style}`}
//           >
//             <a
//               href={href}
//               className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full text-white hover:scale-105 duration-300"
//               download={download}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {child}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;

// ===================================================================================

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const [showMobileBar, setShowMobileBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ignore very small scrolls (prevents flicker)
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowMobileBar(false);
      } else {
        // scrolling up
        setShowMobileBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/rohan-palankar-0b55921a2/",
      color: "hover:text-blue-400",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={22} />,
      href: "https://github.com/Rvp888",
      color: "hover:text-gray-300",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={22} />,
      href: "mailto:rohanpalankar8@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <>
      {/* DESKTOP SOCIAL LINKS */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <ul className="flex flex-col gap-4">
          {links.map(({ id, label, icon, href, color }) => (
            <li key={id} className="group relative">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center w-11 h-11 rounded-xl
              bg-white/5 backdrop-blur-md border border-white/10
              text-white 
              hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20
              transition-all duration-300`}
              >
                {icon}
              </a>

              {/* Tooltip */}
              <span
                className="absolute left-14 top-1/2 -translate-y-1/2
              bg-black/80 backdrop-blur-md text-white text-sm px-3 py-1 rounded-md
              opacity-0 group-hover:opacity-100 group-hover:translate-x-1
              transition-all duration-300 whitespace-nowrap"
              >
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE SOCIAL BAR (AUTO-HIDE) */}
      <div
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        transition-all duration-300 ease-out
        ${
          showMobileBar
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div
          className="flex gap-6 px-6 py-3 rounded-full
          bg-black/70 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          {links.map(({ id, icon, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="
      relative flex items-center justify-center
      text-white
      transition-all duration-200
      active:scale-90
    "
            >
              {/* Touch feedback circle */}
              <span
                className="
        absolute inset-0 rounded-full
        bg-white/10
        opacity-0
        active:opacity-100
        transition-opacity duration-200
      "
              />

              {/* Icon */}
              <span className="relative z-10">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
