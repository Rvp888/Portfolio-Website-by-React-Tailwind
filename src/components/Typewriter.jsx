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

const roles = ["Developer", "Engineer", "UI Engineer"];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (text.length > 0) {
            setText(currentRole.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      !isDeleting && text === currentRole ? 1500 : isDeleting ? 45 : 85,
    );

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  return (
    <span>
      {text}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[2px]
        translate-y-0.5 animate-pulse bg-cyan-400"
      />
    </span>
  );
};

export default Typewriter;
