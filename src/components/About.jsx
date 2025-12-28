import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-16 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-justify">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 ">
          Frontend Developer with 2+ years of experience building responsive,
          user-centric web interfaces using React and modern JavaScript.
        </p>
        <br />
        <p className="text-xl">
          I specialize in React, modern JavaScript, and responsive UI
          development using HTML, CSS, Tailwind, and component-based design
          systems. My work focuses on writing maintainable code, improving UI
          performance, and translating business requirements into intuitive user
          experiences. I actively deepen my understanding of frontend
          architecture, state management, and performance optimization, and I
          enjoy turning complex problems into simple, elegant solutions.
        </p>
        <br />
        <p className="text-xl">
          Currently, I’m looking to grow as a React-focused frontend engineer in
          teams that value clean design, strong fundamentals, and continuous
          improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
