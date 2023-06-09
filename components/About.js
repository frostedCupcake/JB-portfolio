import React from 'react';

const About = () => {
  return (
    <div className="bg-white/70 md:h-[90vh] rounded-md shadow-2xl mx-auto lg:mx-[2rem] my-[2rem] p-[2rem] w-[90%] lg:w-[60%] text-black h-fit">
      <div className="">
        <h1 className="min-[300px]:text-[3.5rem] text-[4rem] md:text-[4rem]  xl:text-[5rem] 2xl:text-[5.5rem] my-2 lg:my-5 text-center md:text-left">
          About Me.
        </h1>
        <div className="text-black tracking-wider flex flex-col justify-center items-center gap-5  xl:leading-10 min-[1700px]:leading-[3rem] text-justify">
          <p className="min-[300px]:text-[1.1rem] text-[1.2rem] md:text-[1.4rem] lg:text-[1.4rem] min-[1700px]:text-[1.6rem]">
            I’m currently a sophomore student studying at the Indian Institute
            of Technology Hyderabad.
          </p>
          <p className="min-[300px]:text-[1.1rem] text-[1.2rem] md:text-[1.4rem] lg:text-[1.4rem] min-[1700px]:text-[1.6rem]">
            I enjoy exploring my creative side by indulging in gardening,
            freelancing, software development & design. I also love to read
            books and expand my knowledge, seeking inspiration from a wide range
            of sources. Some of my favorite books include- Rework: Change the
            Way You Work Forever, Gene Machine: The Race to Decipher the Secrets
            of the Ribosome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
