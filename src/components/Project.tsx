import React from "react";
import "../assets/styles/Project.scss";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  category: "mobile" | "ai-ml" | "web" | "hackathon" | "iot";
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const projects: ProjectType[] = [
  {
    id: 1,
    title: "AI Disease Diagnosis Website",
    description:
      "Intelligent web application for diagnosing 6 different diseases using ML models",
    problem:
      "Healthcare accessibility - enabling quick disease screening without expert consultation",
    techStack: ["React", "Python", "TensorFlow", "Web"],
    category: "hackathon",
    image: require("../assets/images/mock01.png"),
    githubLink: "https://github.com/yashdave182/carescan",
    liveLink: "https://carescan.vercel.app/",
  },
  {
    id: 2,
    title: "Coronary Heart Disease Prediction",
    description:
      "ML model trained on medical dataset to predict heart disease risk",
    problem:
      "Early detection of heart disease through predictive analytics and patient data",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
    category: "ai-ml",
    image: require("../assets/images/mock02.png"),
    githubLink: "https://github.com/yashdave182",
  },

  {
    id: 4,
    title: "AI Job Recommendation System",
    description:
      "Intelligent job matching system using skill analysis and ML algorithms",
    problem:
      "Match candidates with suitable jobs based on skills and experience",
    techStack: ["Python", "Pandas", "Machine Learning", "Data Analysis"],
    category: "ai-ml",
    image: require("../assets/images/mock04.png"),
    githubLink: "https://github.com/yashdave182/skillMatch",
    liveLink: "https://skillmatch-cu.streamlit.app/",
  },
  {
    id: 5,
    title: "Smart Irrigation System",
    description:
      "IoT + Mobile app for automated irrigation control and monitoring",
    problem:
      "Water conservation in agriculture through sensor-based smart watering",
    techStack: ["React Native", "IoT", "Python", "Hardware Integration"],
    category: "iot",
    image: require("../assets/images/mock05.png"),
    githubLink: "https://github.com/yashdave182/FarmFlow",
  },

];

function Project() {

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                className="zoom"
                alt={project.title}
                width="100%"
              />
              <div className="project-overlay">
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <h2>{project.title}</h2>
            <p className="problem">
              <strong>Problem:</strong> {project.problem}
            </p>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
