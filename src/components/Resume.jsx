import './Resume.css';
import Resume1 from '../assets/Resume1.png';
import Resume2 from '../assets/Resume2.png';

function Resume() {
    return (
        <div className="resume-container">
            <h1 className="resume-title">Resume</h1>
            <div className="resume-images">
                <img className="resume-image" src={Resume1} alt="Resume" />
                <img className="resume-image" src={Resume2} alt="Resume" />
            </div>
        </div>
    );
}

export default Resume; 