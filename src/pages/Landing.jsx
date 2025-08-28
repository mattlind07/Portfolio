import Headshot from '../assets/Headshot.jpeg';
import './Landing.css';

function Landing() { 
    return (
    <div>
        <div className='landing-header'>
            <h1 className="landing-title"> Welcome to my Portfolio. Thanks for visiting!</h1>
            <p className="landing-subtitle">Software Developer & Creative Problem Solver</p>
        </div>
        <div className="landing-container">
            <img className="head-shot" src={Headshot} alt="head-shot"/>
            <h2 className="intro-text"> Junior at West Virginia University studying Computer 
                Science with an emphasis in Cybersecurity. Pursuing a career in Software and Web Development.</h2> 
        </div> 
    </div>
    );
}

export default Landing;