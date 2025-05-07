
import Headshot from '../assets/Headshot.jpg';



function About() {
    return (
       
            <div className="about_container">
              <img className="Headshot"src={Headshot} alt="Headshot"/>
              <div className="text">
                <h1>About</h1>
                <p>
                  Hi! I'm Matthew Lindsey, a Computer Science major at West Virginia University with an emphasis in Cybersecurity. 
                  I'm passionate about technology because it's a constantly evolving field, and there's always something new to learn 
                  that keeps it exciting and motivating. I've been working on web applications, and I'm actively seeking opportunities 
                  to expand my skills in software development, whether it's on the frontend, backend, or both. I enjoy being creative 
                  and troubleshooting different ways to build web applications that are not only functional but also visually appealing 
                  to users. Most of my recent work involves building web apps, and I'm always looking for new challenges to sharpen 
                  both my frontend and backend development skills.
                </p>
              </div>
            </div>
      
    );
}
export default About;