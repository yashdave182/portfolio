import React, { useState } from "react";
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
    title: "AI Disease Diagnosis App",
    description:
      "Intelligent mobile app for diagnosing 6 different diseases using ML models",
    problem:
      "Healthcare accessibility - enabling quick disease screening without expert consultation",
    techStack: ["React Native", "Python", "TensorFlow", "Mobile"],
    category: "hackathon",
    image: require("../assets/images/mock01.png"),
    githubLink: "https://github.com/yashdave182",
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
    id: 3,
    title: "Skin Disease Detection Website",
    description:
      "Web-based image classification system for identifying skin diseases",
    problem:
      "Provide dermatological assistance through computer vision without doctor consultation",
    techStack: ["React", "Python", "TensorFlow", "Image Classification"],
    category: "web",
    image: require("../assets/images/mock03.png"),
    githubLink: "https://github.com/yashdave182",
    liveLink: "https://example.com",
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
    githubLink: "https://github.com/yashdave182",
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
    githubLink: "https://github.com/yashdave182",
  },

];

function Project() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "mobile", label: "Mobile" },
    { id: "ai-ml", label: "AI-ML" },
    { id: "web", label: "Web" },
    { id: "hackathon", label: "Hackathon" },
    { id: "iot", label: "IoT" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${
              selectedCategory === cat.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
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

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default Project;
