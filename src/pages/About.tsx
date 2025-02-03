
const About = () => {
  return (
    <div className="main-container">
      <div className="about-body">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="flex text-right pb-8 pl-4 justify-end">
            <p className='subtitle'>About Me</p>
          </div>
          <div className="flex text-4xl font-bold justify-start items-start">
            <p className='about-intro'>
              Hi. I'm Denis Mbuthia, nice to meet you. Welcome to my portfolio, please take a look around.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <p className='about-bio'>
          I'm a dedicated Full-Stack Developer with experience in building web, desktop, and mobile applications that prioritize 
          well-structured design and seamless user interactions. Skilled in application architecture, UI/UX development, and 
          database management, I specialize in crafting efficient and scalable solutions.
          Passionate about integrating AI into software, I strive to develop innovative applications that meet diverse needs—ranging 
          from individual clients and small businesses to large enterprises. My focus is on delivering high-quality, 
          user-centric solutions that drive impact and efficiency.
          </p>  
        </div>
      </div>
    </div>
  )
}

export default About