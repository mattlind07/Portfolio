import './Projects.css';
import WeatherWeGo from '../assets/WeatherWeGo.mov';
import AssemblyToMachine from '../assets/assemblytomachine.png';
import MachineToAssembly from '../assets/machinetoassembly.png';
import HexToAssembly from '../assets/hextoassembly.png';

function Projects () {
    return (
      
    
          
        <div>

          {/* Weather We Go Project */}

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
              <a className="link-text" href="https://weatherwego2.netlify.app" target="_blank">Visit WeatherWeGo Here →</a>
            </div>
            </div>  
            {/* MIPS Translatron Project */}
            <div className="projects-container">
              <div className="video-section">
                <h2>MIPS Translatron Revamp</h2>
                <p className='text-white text-center'>
                  <strong>
                      Demonstrating bidirectional translation of the MULT instruction between Assembly, 
                      Binary, and Hex.
                    </strong>
                </p>
                <img src={AssemblyToMachine} alt="Assembly to Machine Code" />
                <img src={MachineToAssembly} alt="Machine to Assembly Code" />
                <img src={HexToAssembly} alt="Hex to Assembly" />
                <div className="mips-key-features">
                  <p>
                      <strong>Key Features:</strong>
                  </p>
                    <ul>
                      <li>- Refactored and debugged legacy MIPS assembler/disassembler in C</li>
                      <li>- Implemented new MULT, ORI, and SLTI instructions</li>
                      <li>- Enhanced opcode, register, and control flow accuracy</li>
                      <li>- Reconstructed corrupted machine code using bit-pattern analysis</li>
                      <li>- Improved translation reliability and maintainability across modules</li>
                    </ul>
                </div>
              </div>
              <div className="description-section">
                <h3>Project Description</h3>
                  <p>
                  Rebuilt and modernized a legacy MIPS assembler/disassembler written in C. Focused on restoring core functionality 
                  by debugging opcode decoding, register mapping, and control flow logic. Implemented new MULT, ORI, and SLTI 
                  instruction support across both assembler and disassembler modules, improving instruction coverage and reliability. 
                  Conducted binary forensics on corrupted machine code, tracing bit-flip anomalies and reconstructing valid 
                  instruction encodings to ensure accurate translation between source and machine code.
                  </p>
                  
                  <p className="link-text"><a href="https://github.com/zacharyhaufe/assembler_project" target="_blank">
                    View Source Code on GitHub →
                </a></p>
                
              </div>
            </div>
          
        </div>
    );


}
export default Projects;