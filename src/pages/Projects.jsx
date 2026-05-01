import './Projects.css';
import WeatherWeGo from '../assets/WeatherWeGo.mov';
import AssemblyToMachine from '../assets/assemblytomachine.png';
import MachineToAssembly from '../assets/machinetoassembly.png';
import HexToAssembly from '../assets/hextoassembly.png';
import IronKernelMenu from '../assets/IronKernelMenu.png';

function Projects () {
    return (
        <div>
          <div className="projects-container">
            { /* Iron Kernel MPX OS Project */}
            <div className="video-section">
              <h2>Iron Kernel</h2>
              <p className='text-white text-center'>
                <strong>
                  Built a small operating system in C and x86 Assembly with process scheduling, 
                  system calls, serial I/O, and custom memory management.
                </strong>
              </p>
              <img src={IronKernelMenu} alt="Iron Kernel Menu"/>
              <div className="key-features">
                    <p>
                        <strong>Key Features:</strong>
                    </p>
                      <ul>
                        <li>- Built a multiprogramming OS kernel in C and x86 Assembly</li>
                        <li>- Implemented PCB-based process management and priority scheduling</li>
                        <li>- Created ready and blocked queues for process state management</li>
                        <li>- Designed interrupt-based system calls for kernel service requests</li>
                        <li>- Implemented manual process loading and cooperative context switching</li>
                        <li>- Built an interactive COM1 serial command shell</li>
                        <li>- Added commands to create, delete, block, suspend, resume, and inspect processes</li>
                        <li>- Supported RTC date/time commands, alarms, memory inspection, and shutdown</li>
                        <li>- Created a custom heap manager with allocation, freeing, splitting, and merging</li>
                      </ul>
                </div>
            </div>
            <div className="description-section">
              <h3>Project Description</h3>
              <p>
                Built a multiprogramming operating system kernel in C and x86 Assembly. The system supports process creation/management, 
                priority scheduling, cooperative multitasking, interrupt-based system calls, serial I/O, RTC date/time 
                commands, alarms, and memory inspection.

                Implemented core OS components including Process Control Blocks, ready/blocked queues, context switching, serial command shell,
                and custom heap allocation with block splitting, freeing, and merging.
              </p>
              <p className="link-text">
                Source code private due to university academic policy.
              </p>
            </div>
          </div>

          <div className="projects-container">
            {/* Weather We Go Project */}
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
                <div className="key-features">
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