import React from 'react';
import HeroImg from '../assets/heroImage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div>
      <div>
        <div>
            <h2>I'm a Front End Developer</h2>
            <p>
                I have more than a year of experience building softwares.
                Currently, I love to work on web application using technologies like
                React, Tailwind and Bootstrap.
            </p>

            <div>
                <button>
                    Portfolio
                    <span>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
