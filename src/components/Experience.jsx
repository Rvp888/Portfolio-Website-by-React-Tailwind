import React from "react";

const Experience = () => {
  const techStack = ["React", "Tailwind CSS", "Redux Toolkit", "React Query"];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white px-4 lg:px-16 min-h-[90vh] flex items-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6 text-gray-300">My professional journey so far</p>
        </div>

        {/* Experience Card */}

        <div className="bg-gray-900 rounded-lg p-6 shadow-md shadow-gray-600">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Frontend Developer
            </h3>

            {/* Duration Chip */}
            <span className="mt-2 sm:mt-0 max-w-fit px-3 py-1 text-xs sm:text-sm rounded-full border border-cyan-400 text-cyan-400">
              Sept 2023 – Jul 2025
            </span>
          </div>

          <p className="mt-1 text-gray-500 font-medium">
            Vyakar Technologies Pvt. Ltd. · Bhilai, India
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs sm:text-sm rounded-full
                  border border-gray-500 text-gray-300
                  hover:border-cyan-400 hover:text-cyan-400
                  transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Responsibilities */}
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              Developed and maintained responsive, pixel-perfect UI screens for
              a CRM-based SaaS platform using React.js and Tailwind CSS.
            </li>
            <li>
              Improved application performance through lazy loading, memoization
              techniques, and optimized state management.
            </li>
            <li>
              Integrated REST APIs with robust loading and error handling to
              support dynamic, data-driven UI features.
            </li>
            <li>
              Managed client-side state using Redux Toolkit and server state
              with React Query for predictable and reliable UI behavior.
            </li>
            <li>
              Ensured cross-browser compatibility and supported multiple desktop
              resolutions through refined layout structures.
            </li>
            <li>
              Collaborated with team members using Git and GitLab for version
              control and structured development workflows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
