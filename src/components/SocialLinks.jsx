import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rohan-p-0b55921a2/",
      style: "rounded-tl-md lg:rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rvp888",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Rohan_Resume_Web-Dev.pdf",
      style: "rounded-tr-md lg:rounded-tr-none lg:rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="w-full flex justify-center lg:flex-col bottom-0 lg:left-0 lg:h-screen fixed">
      <ul className="flex lg:flex-col">
        {links.map(({id, child, href, style, download}) => (
          <li key={id} className={`flex items-center w-20 h-20 lg:w-40 lg:h-14 py-2 px-6 lg:p-4 mb-[-30px] lg:mb-0 lg:ml-[-85px] lg:hover:ml-[5px] duration-300 lg:hover:rounded-md bg-gray-700 bg-opacity-70 lg:bg-gray-500 ${style}`}>
            <a
              href={href}
              className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
