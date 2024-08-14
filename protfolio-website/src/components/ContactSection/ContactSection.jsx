import React from "react";
import "./ContactSection.css";
import email from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h1>Connect with Me</h1>
      <div className="contact-info">
        <div className="contact-item">
          <img src={email} alt="Email Icon" />
          <a href="prathammhavale38@gmail.com">
            <span>Email</span>
          </a>
        </div>
        <div className="contact-item" onClick={""}>
          <img src={linkedin} alt="LinkedIn Icon" />
          <a
            href="https://www.linkedin.com/in/pratham-mhavale-a2899a262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="contact-item">
          <img src={github} alt="GitHub Icon" />
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
  );
};

export default ContactSection;
