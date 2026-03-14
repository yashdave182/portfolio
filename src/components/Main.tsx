import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";

function Main() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Yash_sem_6_Final.pdf";
    link.download = "Yash_Dave_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/photo.png")} alt="Yash Dave" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/yashdave182"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-dave182/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:yashdave182@gmail.com" title="Email">
              <EmailIcon />
            </a>
          </div>
          <h1>Yash Dave</h1>
          <p className="tagline">
            Building intelligent mobile apps & data-driven AI systems
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/yashdave182"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-dave182/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:yashdave182@gmail.com" title="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
