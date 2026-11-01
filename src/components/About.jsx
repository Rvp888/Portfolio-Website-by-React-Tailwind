import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  Code2,
  Layers3,
  LayoutGrid,
  Zap,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "Redux Toolkit",
  "React Query",
];

const highlights = [
  {
    number: "01",
    title: "React Development",
    description: "Building scalable and maintainable frontend applications.",
    icon: Code2,
  },
  {
    number: "02",
    title: "UI Development",
    description: "Creating responsive and accessible user interfaces.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "SaaS Applications",
    description: "Developing intuitive interfaces for business workflows.",
    icon: LayoutGrid,
  },
  {
    number: "04",
    title: "Performance",
    description: "Improving speed, usability, and overall user experience.",
    icon: Zap,
  },
  {
    number: "05",
    title: "State Management",
    description:
      "Managing application state with Redux Toolkit and React Query.",
    icon: GitBranch,
  },
  {
    number: "06",
    title: "Code Quality",
    description: "Writing clean, reusable, and well-structured code.",
    icon: ShieldCheck,
  },
];

// const highlights = [
//   {
//     number: "01",
//     icon: "</>",
//     title: "React Development",
//     description: "Building scalable and maintainable frontend applications.",
//   },
//   {
//     number: "02",
//     icon: "▱",
//     title: "UI Development",
//     description: "Creating responsive and accessible user interfaces.",
//   },
//   {
//     number: "03",
//     icon: "▦",
//     title: "SaaS Applications",
//     description: "Developing intuitive interfaces for business workflows.",
//   },
//   {
//     number: "04",
//     icon: "ϟ",
//     title: "Performance",
//     description: "Improving speed, usability, and overall user experience.",
//   },
//   {
//     number: "05",
//     icon: "⌘",
//     title: "State Management",
//     description:
//       "Managing application state with Redux Toolkit and React Query.",
//   },
//   {
//     number: "06",
//     icon: "✓",
//     title: "Code Quality",
//     description: "Writing clean, reusable, and well-structured code.",
//   },
// ];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : itemVariants;

  return (
    <section
      name="about"
      id="about"
      className="
        relative isolate overflow-hidden
        min-h-screen
        bg-gradient-to-b from-gray-800 to-black
        px-6
        pt-10 pb-20
        md:px-12
        md:pt-10 md:pb-24
        lg:px-16
        lg:pt-10 lg:pb-28
        text-white
      "
    >
      {/* Background Ambient Glow */}
      <div
        className="
      pointer-events-none absolute
      -left-40 top-1/3 -z-10
      h-96 w-96 rounded-full
      bg-cyan-500/[0.06] blur-[120px]
    "
      />

      <div
        className="
      relative mx-auto w-full
      max-w-[1140px]
    "
      >
        {/* Main Content */}
        <div
          className="
        grid grid-cols-1
        items-start
        gap-10
        lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
        lg:gap-10
      "
        >
          {/* LEFT: Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
          flex min-w-0 flex-col
          items-start
        "
          >
            {/* Section Heading */}
            <motion.div variants={itemVariants} className="mb-7">
              <p
                className="
              mb-3 text-xs font-semibold
              uppercase tracking-[0.22em]
              text-cyan-400 sm:text-sm
            "
              >
                Get to know me
              </p>

              <h2
                className="
              text-3xl font-bold
              tracking-tight text-white
              sm:text-4xl md:text-5xl
            "
              >
                About{" "}
                <span
                  className="
                bg-gradient-to-r
                from-cyan-400 to-blue-500
                bg-clip-text text-transparent
              "
                >
                  Me
                </span>
              </h2>

              {/* Heading Accent */}
              <div
                className="
              mt-4 h-1 w-16
              rounded-full bg-gradient-to-r
              from-cyan-400 to-blue-500
            "
              />
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="
            text-lg font-medium
            leading-relaxed text-gray-100
            sm:text-xl
          "
            >
              I'm a React-focused Frontend Developer with 2+ years of
              professional experience building responsive, user-centric web
              applications.
            </motion.p>

            {/* Professional Experience */}
            <motion.p
              variants={itemVariants}
              className="
            mt-5 text-sm leading-7
            text-gray-400 sm:text-base
          "
            >
              I specialize in React, JavaScript, and component-based UI
              development. At LeadAngel, I worked on enterprise SaaS interfaces,
              translating complex business requirements into intuitive user
              experiences.
            </motion.p>

            {/* Technical Focus */}
            <motion.p
              variants={itemVariants}
              className="
            mt-4 text-sm leading-7
            text-gray-400 sm:text-base
          "
            >
              I focus on reusable components, maintainable code, responsive
              design, and frontend performance while continuously strengthening
              my understanding of modern frontend architecture.
            </motion.p>

            {/* Technology Tags */}
            <motion.div
              variants={itemVariants}
              className="
            mt-6 flex flex-wrap gap-2
          "
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                rounded-full
                border border-white/10
                bg-white/[0.04]
                px-3 py-1.5
                text-xs text-gray-300
                transition-colors duration-300
                hover:border-cyan-400/40
                hover:text-cyan-300
                sm:text-sm
              "
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Professional Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative flex flex-col gap-4
              lg:mt-14
            "
          >
            {/* Background Glow */}
            <div
              className="
            pointer-events-none
            absolute -inset-4 -z-10
            rounded-3xl
            bg-cyan-500/[0.04]
            blur-2xl
          "
            />

            {/* Compact Cards Grid */}
            <div
              className="
            grid grid-cols-1
            gap-3
            sm:grid-cols-2
          "
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -3,
                          transition: {
                            duration: 0.25,
                          },
                        }
                  }
                  className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.03]
                  p-4
                  backdrop-blur-sm
                  transition-colors duration-300
                  hover:border-cyan-400/30
                  hover:bg-white/[0.05]
                  sm:p-5
                "
                >
                  {/* Hover Accent */}
                  <div
                    className="
                  absolute left-0 top-0
                  h-full w-[2px]
                  origin-bottom scale-y-0
                  bg-gradient-to-b
                  from-cyan-400 to-blue-500
                  transition-transform duration-300
                  group-hover:scale-y-100
                "
                  />

                  {/* Card Content */}
                  <div
                    className="
                  flex items-start gap-3
                "
                  >
                    {/* Icon */}
                    <div
                      className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-cyan-400/20
                      bg-cyan-400/[0.08]
                      text-cyan-300
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                    >
                      <item.icon
                        size={21}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      {/* Title and Number */}
                      <div
                        className="
                      mb-2 flex
                      items-start
                      justify-between gap-2
                    "
                      >
                        <h3
                          className="
                        text-sm font-semibold
                        leading-5 text-white
                        sm:text-base
                      "
                        >
                          {item.title}
                        </h3>

                        <span
                          className="
                        shrink-0
                        text-[10px]
                        font-medium
                        tracking-wider
                        text-gray-600
                      "
                        >
                          {item.number}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className="
                      text-xs leading-6
                      text-gray-400
                      sm:text-sm
                    "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
