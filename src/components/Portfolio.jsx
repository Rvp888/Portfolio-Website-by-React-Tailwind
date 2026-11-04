// import nagakhel from "../assets/naga.png";
// import wildOasisWebsite from "../assets/wild-oasis.png";
// import wildOasisApp from "../assets/wild-oasis-app.png";
// import kaamBridge from "../assets/kaamBridge-landing.png";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const Portfolio = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "The Wild Oasis Website",
//       image: wildOasisWebsite,
//       description:
//         "A modern hotel booking platform with real-time availability and seamless reservations. Built with a scalable architecture and clean UI for a smooth user experience.",
//       tech: ["Next JS", "Tailwind CSS", "Supabase"],
//       live: "https://the-wild-oasis-new-website.vercel.app",
//       github: "https://github.com/Rvp888/the-wild-oasis-website",
//     },
//     {
//       id: 2,
//       title: "The Wild Oasis App",
//       image: wildOasisApp,
//       description:
//         "A full-featured hotel management dashboard for handling bookings, cabins, and guest data. Optimized for performance with efficient state management and secure backend integration.",
//       tech: ["React", "React Query", "Styled Components", "Supabase"],
//       live: "https://wild-oasis-retreat.vercel.app",
//       github: "https://github.com/Rvp888/The-Wild-Oasis",
//     },
//     {
//       id: 3,
//       title: "KaamBridge",
//       image: kaamBridge,
//       description:
//         "A responsive job portal platform connecting candidates with relevant opportunities. Includes job posting, filtering, and streamlined application workflows.",
//       tech: ["React", "React Router", "Tailwind CSS", "Supabase"],
//       live: "https://kaam-bridge.vercel.app",
//       github: "https://github.com/Rvp888/KaamBridge",
//     },
//     {
//       id: 4,
//       title: "Naga Khel",
//       image: nagakhel,
//       description:
//         "A classic single-player Snake game built with core web technologies. Features continuous game loop, collision detection, dynamic scoring, and high-score persistence via Local Storage, enhanced with background music and interactive sound effects.",
//       tech: ["HTML", "CSS", "JavaScript"],
//       live: "https://naga-khel.vercel.app",
//       github: "https://github.com/Rvp888/Naga-Khel",
//     },
//   ];

//   return (
//     <div
//       name="projects"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white px-4 md:px-16 min-h-[85vh] flex items-center"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         {/* Heading */}
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Projects
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 px-12 sm:px-0">
//           {projects.map(
//             ({ id, title, image, description, tech, live, github }) => (
//               <div className="group rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
//                 <div className="relative aspect-[16/9] overflow-hidden">
//                   <img
//                     src={image}
//                     alt={title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//                   <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <a
//                       href={live}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md
//                       bg-cyan-600 hover:bg-cyan-500 text-black font-medium transition-all duration-300"
//                     >
//                       <FaExternalLinkAlt size={12} />
//                       Live
//                     </a>
//                     <a
//                       href={github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 transition-all duration-300"
//                     >
//                       <FaGithub size={14} />
//                       Code
//                     </a>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 flex flex-col flex-1">
//                   {/* Title */}
//                   <h3 className="text-lg font-semibold text-white leading-tight">
//                     {title}
//                   </h3>

//                   {/* Description */}
//                   <p className="mt-2 text-sm text-gray-400 leading-relaxed">
//                     {description}
//                   </p>

//                   {/* Divider */}
//                   <div className="my-4 h-px bg-gray-700/60" />

//                   {/* Tech stack label */}
//                   <p className="mb-2 text-sm font-semibold text-gray-300">
//                     Tech Stack
//                   </p>

//                   {/* Tech pills */}
//                   <div className="flex flex-wrap gap-2">
//                     {tech.map((item, index) => (
//                       <span
//                         key={index}
//                         className="
//                           text-xs
//                           px-3 py-1
//                           rounded-full
//                           bg-gray-700/60
//                           text-gray-300
//                           border border-gray-600/50
//                           hover:bg-gray-600/60
//                           transition-colors
//                         "
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

// UPDATED VERSION

import nagakhel from "../assets/naga.png";
import wildOasisWebsite from "../assets/wild-oasis.png";
import wildOasisApp from "../assets/wild-oasis-app.png";
import kaamBridge from "../assets/kaamBridge-landing.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "The Wild Oasis Website",
    image: wildOasisWebsite,
    description:
      "A modern hotel booking platform with real-time availability and seamless reservations. Built with a scalable architecture and clean UI for a smooth user experience.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    live: "https://the-wild-oasis-new-website.vercel.app",
    github: "https://github.com/Rvp888/the-wild-oasis-website",
  },
  {
    id: 2,
    title: "The Wild Oasis App",
    image: wildOasisApp,
    description:
      "A full-featured hotel management dashboard for handling bookings, cabins, and guest data. Optimized for performance with efficient state management and secure backend integration.",
    tech: ["React", "React Query", "Styled Components", "Supabase"],
    live: "https://wild-oasis-retreat.vercel.app",
    github: "https://github.com/Rvp888/The-Wild-Oasis",
  },
  {
    id: 3,
    title: "KaamBridge",
    image: kaamBridge,
    description:
      "A responsive job portal platform connecting candidates with relevant opportunities. Includes job posting, filtering, and streamlined application workflows.",
    tech: ["React", "React Router", "Tailwind CSS", "Supabase"],
    live: "https://kaam-bridge.vercel.app",
    github: "https://github.com/Rvp888/KaamBridge",
  },
  {
    id: 4,
    title: "Naga Khel",
    image: nagakhel,
    description:
      "A classic single-player Snake game built with core web technologies. Features a continuous game loop, collision detection, dynamic scoring, and high-score persistence via Local Storage, enhanced with background music and interactive sound effects.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://naga-khel.vercel.app",
    github: "https://github.com/Rvp888/Naga-Khel",
  },
];

const Portfolio = () => {
  return (
    <section
      name="projects"
      id="projects"
      className="
        relative
        w-full
        scroll-mt-5
        bg-gradient-to-b from-black via-gray-900 to-gray-800
        px-4
        py-5
        text-white
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      <div className="mx-auto flex w-full max-w-[1140px] flex-col">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Gradient Underline */}
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Check out some of my work right here
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-16 sm:grid-cols-2">
          {projects.map(
            ({ id, title, image, description, tech, live, github }) => (
              <article
                key={id}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cyan-500/30
                  bg-gradient-to-br
                  from-black
                  to-gray-900
                  shadow-[0_0_16px_5px_rgba(34,211,238,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]
                "
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] lg:aspect-[16/7] overflow-hidden bg-gray-950 border-b border-gray-400/50">
                  <img
                    src={image}
                    alt={`${title} project preview`}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                      opacity-100
                      transition-opacity
                      duration-300
                      sm:opacity-0
                      sm:group-hover:opacity-100
                      sm:group-focus-within:opacity-100
                    "
                  />

                  {/* Project Actions */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      flex
                      justify-center
                      gap-3
                      p-4
                      opacity-100
                      transition-opacity
                      duration-300
                      sm:opacity-0
                      sm:group-hover:opacity-100
                      sm:group-focus-within:opacity-100
                    "
                  >
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${title} live`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-cyan-500
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-gray-950
                        transition-colors
                        hover:bg-cyan-400
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-cyan-300
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-gray-900
                      "
                    >
                      <FaExternalLinkAlt size={12} />
                      Live
                    </a>

                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${title} source code on GitHub`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-gray-500
                        bg-gray-900/90
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition-colors
                        hover:border-gray-400
                        hover:bg-gray-800
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-cyan-300
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-gray-900
                      "
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-lg font-semibold text-gray-200">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-400">
                    {description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto pt-4">
                    <div className="mb-3 h-px bg-gray-700/80" />

                    <p className="mb-3 text-sm font-semibold text-gray-200">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full
                            border
                            border-gray-600/70
                            bg-gray-700/50
                            px-4
                            py-1
                            text-xs
                            text-gray-200
                            transition-colors
                            hover:border-cyan-500/40
                            hover:bg-gray-700
                            
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
