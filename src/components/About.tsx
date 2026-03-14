import React from "react";
import "../assets/styles/About.scss";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="items-container">
        <h1>About Me</h1>
        <div className="about-content">
          <p>
            I'm a passionate software developer specializing in <strong>Mobile Development</strong> and <strong>AI/ML</strong>.
            I love building intelligent, data-driven applications that solve real-world problems. Currently pursuing my B.E. in Computer Engineering
            at SVIT (expected 2027), and working as an ML Engineer Intern at Parul Chemicals.
          </p>
          <p>
            I thrive in hackathon environments, where I've built disease diagnosis apps, IoT systems, and AI-powered recommendation engines.
            When I'm not coding, I'm exploring cutting-edge ML frameworks, contributing to open source, or learning new mobile technologies.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Hackathons Participated</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>Open Source Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
