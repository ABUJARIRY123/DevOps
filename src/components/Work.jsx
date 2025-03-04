import React from 'react';
import { data } from "../data/data.js";
import { Link } from 'react-scroll';


const Work = () => {
    const project = data;  
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
      <div className='mt-80 md:mt-20 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400'>
            Projects
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
  {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Check
          </button>
        </a>
        {/* eslint-disable-next-line */}
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
          <Link to='contact' smooth={true} duration={500}>
          Talk to Me
          </Link>   
          </button>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
