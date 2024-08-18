import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <div className=" flex justify-center md:justify-start items-center min-h-16   w-full">
          <p className="dm text-sm md:text-base opacity-70 leading-relaxed tracking-normal ">
            Copyright © 2024{" "}
            <a
              className=" border-zinc-700 border-b hover:text-blue-500"
              href="https://www.shahedahmed.tech/"
              target="_blank"
            >
              Shahed Ahmed
            </a>
            <Link to="/about" className='mx-5 underline' >
            About
            </Link>
          </p>
        </div>
        </div>
    );
};

export default Footer;