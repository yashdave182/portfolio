import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skillsData = [
  {
    icon: faMobile,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications using React Native and modern frameworks. Specialized in building responsive, performant mobile experiences.",
    skills: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Flutter",
      "Android Studio",
      "Mobile UI/UX",
    ],
  },
  {
    icon: faPython,
    title: "AI/ML & Data Science",
    description:
      "Machine learning pipelines, data analysis, and AI model deployment. Experienced with popular ML frameworks and data processing libraries.",
    skills: [
      "Python",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Hugging Face",
      "OpenAI API",
    ],
  },
  {
    icon: faReact,
    title: "Web Development",
    description:
      "Full-stack web development with modern React and backend frameworks. Building scalable, maintainable web applications.",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Flask", "SQL"],
  },
  {
    icon: faDocker,
    title: "DevOps & Tools",
    description:
      "Development tools, deployment pipelines, and cloud infrastructure. Ensuring smooth development and production workflows.",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Google Cloud",
      "Linux",
      "CI/CD",
      "Postman",
    ],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Skills & Expertise</h1>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={skill.icon as IconProp} size="3x" />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {skill.skills.map((tech, techIndex) => (
                  <Chip key={techIndex} className="chip" label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
