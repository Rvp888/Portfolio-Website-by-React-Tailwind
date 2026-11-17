// import { useEffect, useState } from "react";

// const roles = ["Front End Developer", "React Developer", "UI Engineer"];

// const Typewriter = () => {
//   const [text, setText] = useState("");
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (charIndex < roles[roleIndex].length) {
//         setText((prev) => prev + roles[roleIndex][charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setText("");
//           setCharIndex(0);
//           setRoleIndex((prev) => (prev + 1) % roles.length);
//         }, 1500);
//       }
//     }, 80);

//     return () => clearTimeout(timeout);
//   }, [charIndex, roleIndex]);

//   return <span>{text}</span>;
// };

// export default Typewriter;

import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Engineer",
  "Problem Solver",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];
  const separatorIndex = text.indexOf(" ");

  const firstLine =
    separatorIndex === -1 ? text : text.slice(0, separatorIndex);

  const secondLine =
    separatorIndex === -1 ? "" : text.slice(separatorIndex + 1);

  useEffect(() => {
    const delay = isDeleting ? 45 : text === currentRole ? 1600 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, currentRole, isDeleting]);

  const cursor = (
    <span
      aria-hidden="true"
      className="ml-1 inline-block h-[0.85em] w-[3px]
      translate-y-0.5 animate-pulse bg-cyan-400"
    />
  );

  return (
    <span className="flex flex-col" aria-label={currentRole}>
      {/* First Line */}
      <span className="block min-h-[1.15em] text-white">
        {firstLine}
        {separatorIndex === -1 && cursor}
      </span>

      {/* Second Line */}
      <span
        className="block min-h-[1.15em]
        bg-gradient-to-r from-cyan-400
        via-sky-400 to-blue-500
        bg-clip-text text-transparent"
      >
        {secondLine}
        {separatorIndex !== -1 && cursor}
      </span>
    </span>
  );
};

export default Typewriter;
