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
          I have been coding from last one year and have a good understanding of
          the latest web development technologies and trends. I am well-versed
          in using HTML, CSS and JavaScript and using frameworks like React.Js,
          Bootstrap and jQuery. I have a good understanding of how to create
          responsive and user-friendly webpages that are both visually appealing
          and easy to use. In addition to my technical skills, I am also an
          excellent problem-solver and am familiar with best practices for web
          development..
        </p>
        <br />
        <p className="text-xl">
          I am a self-motivated professional with a strong attention to detail,
          and I am capable of meeting deadlines while delivering high quality
          results. I am passionate about web development and always looking for
          new ways to improve my skills and knowledge. I am currently looking
          for an entry level Web Developer role.
        </p>
      </div>
    </div>
  );
};

export default About;
