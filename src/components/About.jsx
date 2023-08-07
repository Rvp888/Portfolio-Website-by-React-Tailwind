import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-16 px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          suscipit a velit, eligendi vel unde eius. Id eius sequi voluptatum,
          itaque necessitatibus, harum minus cupiditate aspernatur odio atque
          error. Qui, iusto. Numquam, cumque eos provident, quia obcaecati
          labore earum dolore ab harum consequatur, praesentium necessitatibus.
          Eos reiciendis distinctio perspiciatis exercitationem!
        </p>
        <br />
        <p className="text-xl">
          I have been coding from last one year and have developed a strong
          skillset in HTML, CSS, and JavaScript. I am also proficient in React.Js. 
          I have a good understanding of how to create responsive
          and user-friendly webpages that are both visually appealing and easy
          to use.
        </p>
      </div>
    </div>
  );
};

export default About;
