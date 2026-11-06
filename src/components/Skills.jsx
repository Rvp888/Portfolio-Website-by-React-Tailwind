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

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: javascript, title: "JavaScript" },
    { id: 4, src: react, title: "React" },
    { id: 5, src: redux, title: "Redux Toolkit" },
    { id: 6, src: reactQuery, title: "React Query" },
    { id: 7, src: tailwind, title: "Tailwind CSS" },
    { id: 8, src: bootstrap, title: "Bootstrap" },
    { id: 9, src: nextJS, title: "Next.js" },
    { id: 10, src: nodeJS, title: "Node.js" },
    { id: 11, src: expressJS, title: "Express.js" },
    { id: 12, src: mongodb, title: "MongoDB" },
  ];

  return (
    <section
      name="skills"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 px-4 md:px-16 py-16"
    >
      <div className="max-w-[1140px] mx-auto text-white">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
            Technologies and tools I use to build responsive, interactive, and
            scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`
                group relative overflow-hidden
                rounded-xl
                border border-cyan-500/20
                bg-gradient-to-b from-white/[0.06] to-white/[0.01]
                backdrop-blur
                p-5
                flex flex-col items-center justify-center

                shadow-[0_0_14px_rgba(34,211,238,0.07)]
                animate-skill-glow

                transition-all duration-300 ease-out
                transform-gpu

                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:shadow-[0_0_22px_rgba(34,211,238,0.12)]
              `}
            >
              <img
                src={src}
                alt={title}
                className="
                  h-10 w-10 sm:h-14 sm:w-14
                  object-contain
                  animate-skill-float
                  transition-transform duration-300
                  group-hover:scale-110
                  group-hover:[animation-play-state:paused]
                "
              />
              <p
                className="mt-3 text-xs sm:text-sm font-medium text-gray-300
                text-center tracking-wide transition-colors duration-300
                group-hover:text-cyan-300"
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
