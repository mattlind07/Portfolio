import './About.css';
import family from '../assets/family.png';



function About() {
    return (
       
    <div className="about_container">
      <div> 
        <h1 className="about-title">About Me</h1>
      </div> 
          
            <div className='picture-text'>
              <div>
                <img className="family" src={family} alt='family'/>
              </div>
              <div>
            <h2 className="about-text">
                  Hi! I'm Matthew Lindsey. I'm passionate about technology because it's a constantly evolving field, and there's always something new to learn 
                  that keeps it exciting and motivating. I've been working on web applications, and I'm actively seeking opportunities 
                  to expand my skills in software development, whether it's on the frontend, backend, or both. I enjoy being creative 
                  and troubleshooting different ways to build web applications that are not only functional but also visually appealing 
                  to users. My recent work includes building a weather app, and this portfolio website. I'm always looking for new challenges to sharpen 
                  both my frontend and backend development skills.
              </h2>
              </div>
              </div>
            
      </div>
      
    );
}
export default About;