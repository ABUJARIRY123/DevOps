import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center  w-full h-full -mt-56'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>           
            <p className='text-4xl font-bold inline border-b-4 border-lime-60'>About Me</p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello. I am Ridhiwani, it is my pleasure having you here. Kindly navigate around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals, small and medium businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your doorstep?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
