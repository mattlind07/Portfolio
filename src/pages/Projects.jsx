import './Projects.css';
import WeatherWeGo from '../assets/WeatherWeGo.mov';

function Projects () {
    return (
      
    
          
          <div className="projects-container">
            <div className="video-section">
              <h2>WeatherWeGo</h2>
              <div className="video-container">
                <video src={WeatherWeGo} alt="WeatherWeGo" controls />
              </div>
            </div>
            <div className="description-section">
              <h3>Project Description</h3>
              <p>
                This project was based around designing a web app that displays weather information 
                in an intuitive and user-friendly interface. The application provides real-time 
                weather data with interactive features and a clean, modern design.
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul>
                <li>Real-time weather data integration</li>
                <li>Interactive map interface</li>
                <li>Find a Walkability Score</li>
                <li>Personality Quiz</li>
                <li>Login Page</li>
              </ul>
            </div>
          </div>
        

    
    );


}
export default Projects;