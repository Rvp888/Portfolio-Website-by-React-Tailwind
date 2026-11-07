// import React from "react";

// const Experience = () => {
//   const techStack1 = ["React", "Next.JS", "Tailwind CSS", "Redux Toolkit"];
//   const techStack2 = [
//     "React",
//     "TypeScript",
//     "Tailwind CSS",
//     "Redux Toolkit",
//     "React Query",
//   ];

//   return (
//     <div
//       name="experience"
//       className="w-full bg-gradient-to-b from-black to-gray-800 text-white px-4 md:px-16 min-h-[90vh] flex items-center"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
//         {/* Section Header */}
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Experience
//           </p>
//           <p className="py-6 text-gray-300">My professional journey so far</p>
//         </div>

//         {/* Experience Card */}

//         <div className="bg-gray-900 rounded-lg p-6 shadow-md shadow-gray-600 mb-12">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//             <h3 className="text-2xl font-semibold text-cyan-400">
//               Software Developer (Frontend)
//             </h3>

//             {/* Duration Chip */}
//             <span className="mt-2 sm:mt-0 max-w-fit px-3 py-1 text-xs sm:text-sm rounded-full border border-cyan-400 text-cyan-400">
//               Aug 2025 – Present
//             </span>
//           </div>

//           <p className="mt-1 text-gray-400 font-medium">Utilized, India</p>

//           {/* Tech Stack Badges */}
//           <div className="flex flex-wrap gap-2 mt-4">
//             {techStack1.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-xs sm:text-sm rounded-full
//                   border border-gray-500 text-gray-300
//                   hover:border-cyan-400 hover:text-cyan-400
//                   transition-colors duration-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* Responsibilities */}
//           <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
//             <li>
//               Contributed to the end-to-end frontend development of Utilized's
//               web platform, working across multiple modules and user-facing
//               functionalities.
//             </li>
//             <li>
//               Implemented frontend features and application workflows across the
//               platform, translating functional requirements and UI/UX designs
//               into interactive interfaces.
//             </li>
//             <li>
//               Integrated REST APIs to fetch, process, and display dynamic data,
//               ensuring seamless communication between frontend components and
//               backend services.
//             </li>
//             <li>
//               Developed interactive forms, implemented input validation, handled
//               user interactions, and managed application states across different
//               modules.
//             </li>
//             <li>
//               Worked on improving component reusability, code maintainability,
//               application responsiveness, and overall frontend performance.
//             </li>
//           </ul>
//         </div>

//         <div className="bg-gray-900 rounded-lg p-6 shadow-md shadow-gray-600 mb-12">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//             <h3 className="text-2xl font-semibold text-cyan-400">
//               Frontend Developer
//             </h3>

//             {/* Duration Chip */}
//             <span className="mt-2 sm:mt-0 max-w-fit px-3 py-1 text-xs sm:text-sm rounded-full border border-cyan-400 text-cyan-400">
//               Sept 2023 – Jul 2025
//             </span>
//           </div>

//           <p className="mt-1 text-gray-400 font-medium">
//             Vyakar Technologies Pvt. Ltd. · Bhilai, India
//           </p>

//           {/* Tech Stack Badges */}
//           <div className="flex flex-wrap gap-2 mt-4">
//             {techStack2.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-xs sm:text-sm rounded-full
//                   border border-gray-500 text-gray-300
//                   hover:border-cyan-400 hover:text-cyan-400
//                   transition-colors duration-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* Responsibilities */}
//           <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
//             <li>
//               Developed and maintained responsive, pixel-perfect UI screens for
//               a CRM-based SaaS platform using React.js and Tailwind CSS.
//             </li>
//             <li>
//               Improved application performance through lazy loading, memoization
//               techniques, and optimized state management.
//             </li>
//             <li>
//               Integrated REST APIs with robust loading and error handling to
//               support dynamic, data-driven UI features.
//             </li>
//             <li>
//               Managed client-side state using Redux Toolkit and server state
//               with React Query for predictable and reliable UI behavior.
//             </li>
//             <li>
//               Ensured cross-browser compatibility and supported multiple desktop
//               resolutions through refined layout structures.
//             </li>
//             <li>
//               Collaborated with team members using Git and GitLab for version
//               control and structured development workflows.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

const experiences = [
  {
    id: 1,
    role: "Software Developer (Frontend)",
    company: "Utilized",
    location: "India",
    duration: "Aug 2025 – Present",
    techStack: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    responsibilities: [
      "Contributed to the end-to-end frontend development of Utilized's web platform, working across multiple modules and user-facing functionalities.",
      "Implemented frontend features and application workflows, translating functional requirements and UI/UX designs into interactive interfaces.",
      "Integrated REST APIs to fetch, process, and display dynamic data, ensuring seamless communication between frontend components and backend services.",
      "Developed interactive forms, implemented input validation, handled user interactions, and managed application states across different modules.",
      "Worked on improving component reusability, code maintainability, application responsiveness, and overall frontend performance.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Vyakar Technologies Pvt. Ltd.",
    location: "Bhilai, India",
    duration: "Sept 2023 – Jul 2025",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
    ],
    responsibilities: [
      "Developed and maintained responsive, pixel-perfect UI screens for a CRM-based SaaS platform using React.js and Tailwind CSS.",
      "Improved application performance through lazy loading, memoization techniques, and optimized state management.",
      "Integrated REST APIs with robust loading and error handling to support dynamic, data-driven UI features.",
      "Managed client-side state using Redux Toolkit and server state with React Query for predictable and reliable UI behavior.",
      "Ensured cross-browser compatibility and supported multiple desktop resolutions through refined layout structures.",
      "Collaborated with team members using Git and GitLab for version control and structured development workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-black to-gray-800 px-4 md:px-16 py-16"
    >
      <div className="max-w-[1140px] mx-auto text-white">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
            My professional journey, the products I've contributed to, and the
            technologies I've worked with.
          </p>
        </div>

        {/* Experience Timeline */}
        <div
          className="
            relative pl-8 sm:pl-10 space-y-7
            before:absolute before:left-[7px] before:top-2 before:bottom-2
            before:w-px
            before:bg-gradient-to-b
            before:from-cyan-400/70 before:via-blue-500/30 before:to-transparent
          "
        >
          {experiences.map((experience) => (
            <article key={experience.id} className="group relative">
              {/* Timeline Marker */}
              <span
                className="
                  absolute -left-8 sm:-left-10 top-6
                  h-[15px] w-[15px] rounded-full
                  border-[3px] border-cyan-400
                  bg-gray-950
                  shadow-[0_0_12px_rgba(34,211,238,0.45)]
                  transition-all duration-300
                  group-hover:scale-125
                  group-hover:shadow-[0_0_18px_rgba(34,211,238,0.75)]
                "
              />

              {/* Experience Card */}
              <div
                className="
                  rounded-xl
                  border border-cyan-500/20
                  bg-gradient-to-br from-gray-800/80 to-gray-900/90
                  p-5 sm:p-6
                  shadow-[0_0_18px_rgba(34,211,238,0.04)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_26px_rgba(34,211,238,0.10)]
                "
              >
                {/* Role and Duration */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {experience.company}
                      <span className="mx-2 text-gray-600">·</span>
                      {experience.location}
                    </p>
                  </div>

                  <span
                    className="
                      w-fit shrink-0
                      rounded-full
                      border border-cyan-500/30
                      bg-cyan-500/5
                      px-3 py-1
                      text-xs font-medium text-cyan-300
                    "
                  >
                    {experience.duration}
                  </span>
                </div>

                {/* Technology Stack */}
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border border-gray-600/70
                          bg-white/[0.03]
                          px-3 py-1
                          text-xs text-gray-300
                          transition-colors duration-300
                          hover:border-cyan-400/50
                          hover:text-cyan-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Key Contributions
                  </p>

                  <ul className="space-y-2.5">
                    {experience.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="
                          flex items-start gap-3
                          text-sm leading-relaxed text-gray-300
                        "
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
