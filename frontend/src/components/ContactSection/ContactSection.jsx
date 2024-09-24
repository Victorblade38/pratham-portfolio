import React from "react";
import "./ContactSection.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import gmail from "../../assets/gmail.png";

const ContactSection = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <h1>Feedback / Message</h1>
        <h1>Connect with Me</h1>
        <div className="contact-message">
          <input type="text" placeholder="name" />
          <textarea name="" id="" rows={10}></textarea>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon-border">
              <img src={gmail} alt="LinkedIn Icon" width={20} height={20} />
            </div>
            <a href="prathammhavale38@gmail.com">
              <span>prathammhavale38</span>
            </a>
          </div>
          <div className="contact-item">
            <div className="icon-border">
              <img src={linkedin} alt="LinkedIn Icon" width={20} height={20} />
            </div>
            <a
              href="https://www.linkedin.com/in/pratham-mhavale-a2899a262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="contact-item">
            <div className="icon-border">
              <img src={github} alt="GitHub Icon" width={20} height={20} />
            </div>
            <a
              href="https://github.com/Victorblade38"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
          </div>
          <div className="contact-item">
            <div className="icon-border">
              <img src={insta} alt="GitHub Icon" width={20} height={20} />
            </div>
            <a
              href="https://github.com/Victorblade38"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
