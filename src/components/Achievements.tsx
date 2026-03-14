import React from "react";
import "../assets/styles/Achievements.scss";

interface Achievement {
  id: number;
  title: string;
  type: "hackathon" | "certification" | "opensource";
  date: string;
  description: string;
  icon?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "SJIM HealthTech Hackathon",
    type: "hackathon",
    date: "2024",
    description: "Built AI disease diagnosis app with real-time ML inference",
  },
  {
    id: 2,
    title: "Smart Gujarat Hackathon",
    type: "hackathon",
    date: "2024",
    description: "Developed smart irrigation system with IoT integration",
  },
  {
    id: 3,
    title: "MeciaHacks",
    type: "hackathon",
    date: "2023",
    description: "Created mobile app for social good with React Native",
  },
  {
    id: 4,
    title: "Tinkerthon 3.0",
    type: "hackathon",
    date: "2023",
    description: "Participated in national hackathon with hardware-software integration",
  },
  {
    id: 5,
    title: "GirlScript Summer of Code 2024",
    type: "opensource",
    date: "2024",
    description: "Contributed to multiple open source projects and documentation",
  },
  {
    id: 6,
    title: "Hacktoberfest 2024",
    type: "opensource",
    date: "2024",
    description: "Made significant contributions to open source during October campaign",
  },
  {
    id: 7,
    title: "CodeUnnati – SAP Certification",
    type: "certification",
    date: "2023",
    description: "Completed SAP ERP certification course and earned badge",
  },
  {
    id: 8,
    title: "Google Cloud Skill Badges",
    type: "certification",
    date: "2024",
    description: "Completed multiple Google Cloud Platform certifications",
  },
];

function Achievements() {
  const hackathons = achievements.filter((a) => a.type === "hackathon");
  const certifications = achievements.filter((a) => a.type === "certification");
  const opensource = achievements.filter((a) => a.type === "opensource");

  return (
    <div className="achievements-container" id="achievements">
      <div className="items-container">
        <h1>Achievements & Recognition</h1>

        <div className="achievement-section">
          <h2>🏆 Hackathons</h2>
          <div className="achievement-grid">
            {hackathons.map((achievement) => (
              <div className="achievement-card" key={achievement.id}>
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievement-section">
          <h2>🚀 Open Source Contributions</h2>
          <div className="achievement-grid">
            {opensource.map((achievement) => (
              <div className="achievement-card" key={achievement.id}>
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievement-section">
          <h2>🎓 Certifications</h2>
          <div className="achievement-grid">
            {certifications.map((achievement) => (
              <div className="achievement-card" key={achievement.id}>
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
