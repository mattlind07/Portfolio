import './Contact.css';

function Contact() {
    return (
    <div className="text">
          <h1 className="contact-title">Contact</h1>
            <div className="contact-div">
              <div className="contact-row">
                <div className="contact">
                  <h2> Email:</h2>
                  <p> Matthewl17@comcast.net</p>
                </div>
                <div className='contact'>
                  <h2> Phone: </h2>
                  <p> (304) 216-9925 </p>
                </div>
              </div>
              <div className="contact-row">
                <div className='contact-g'>
                  <h2> GitHub </h2>
                  <a href="https://github.com/mattlind07" target="_blank">My Profile</a>
                </div>
                <div className='contact-l'>
                  <h2> LinkedIn</h2>
                  <a href="https://www.linkedin.com/in/matthew-lindsey-53b646290/?trk=public-profile-join-page" target="_blank">Matthew Lindsey</a>
                </div>
              </div>
          </div>
        </div>
    );
}

export default Contact;




