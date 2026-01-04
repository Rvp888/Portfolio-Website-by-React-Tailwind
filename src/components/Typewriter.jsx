import { useEffect, useState } from "react";

const roles = ["Front End Developer", "React Developer", "UI Engineer"];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return <span>{text}</span>;
};

export default Typewriter;
