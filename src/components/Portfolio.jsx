// import nagakhel from "../assets/naga-khel.png";
import nagakhel from "../assets/naga.png";
import wildOasisWebsite from "../assets/wild-oasis.png";
import wildOasisApp from "../assets/wild-oasis-app.png";
import worldWise from "../assets/world-wise.png";
import fastPizza from "../assets/fast-react-pizza.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "The Wild Oasis Website",
      image: wildOasisWebsite,
      description: "A hotel booking website",
      tech: ["Next JS", "Tailwind CSS", "Supabase"],
      live: "https://the-wild-oasis-new-website.vercel.app",
      github: "https://github.com/Rvp888/the-wild-oasis-website",
    },
    {
      id: 2,
      title: "The Wild Oasis App",
      image: wildOasisApp,
      description: "A hotel management app",
      tech: ["React", "React Query", "Styled Components", "Supabase"],
      live: "https://wild-oasis-retreat.vercel.app",
      github: "https://github.com/Rvp888/The-Wild-Oasis",
    },
    {
      id: 3,
      title: "WorldWise",
      image: worldWise,
      description:
        "A world map that tracks your footsteps into every city you can think of. ",
      tech: ["React", "React Router", "CSS"],
      live: "https://world-wise-new.vercel.app",
      github: "https://github.com/Rvp888/World-Wise-by-React",
    },
    {
      id: 4,
      title: "Fast Pizza",
      image: fastPizza,
      description: "A pizza delivery app",
      tech: ["React", "Redux", "React Router", "Tailwind CSS"],
      live: "https://fast-pizza-world.vercel.app",
      github: "https://github.com/Rvp888/Fast-React-Pizza",
    },
    {
      id: 5,
      title: "Naga Khel",
      image: nagakhel,
      description:
        "An interactive gaming platform with modern UI and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://naga-khel.vercel.app",
      github: "https://github.com/Rvp888/Naga-Khel",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white px-4 md:px-16 min-h-[85vh] flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(
            ({ id, title, image, description, tech, live, github }) => (
              <div className="group rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md 
                      bg-cyan-600 hover:bg-cyan-500 text-black font-medium transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 transition-all duration-300"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {description}
                  </p>

                  {/* Divider */}
                  <div className="my-4 h-px bg-gray-700/60" />

                  {/* Tech stack label */}
                  <p className="mb-2 text-sm font-semibold text-gray-300">
                    Tech Stack
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                      <span
                        key={index}
                        className="
                          text-xs
                          px-3 py-1
                          rounded-full
                          bg-gray-700/60
                          text-gray-300
                          border border-gray-600/50
                          hover:bg-gray-600/60
                          transition-colors
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
