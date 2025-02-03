import HeroImage from '../assets/dvp3.png'
const Home = () => {
  return (
    <div className="main-container">
        <div className="main-body">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <h2 className="font-bold text-4xl text-orange-700">Hello, I'm Denis,</h2>
            </div>
            <div className="flex">
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Full Stack Developer</h2>
            </div>
            <div className="flex flex-col flex-wrap gap-2">
              <p className="intro-text">
                I’m a full-stack developer passionate about creating and designing exceptional digital experiences. 
                Currently, I specialize in building responsive full-stack web applications with AI integration.
              </p>
              <a href="/docs/My-Resume.pdf" target="_blank" download="My Resume">
                <button className="button-primary">
                  Download resume
                </button>
              </a>
            </div>
          </div>
          <div className='image-box'>
            <img src={HeroImage} alt="Hero" className="hero-image" />
          </div>
        </div>
    </div>
  )
}

export default Home