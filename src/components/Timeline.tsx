import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jul 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              ML Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Parul Chemicals, India
            </h4>
            <p>
              Developed ML sales automation pipeline using Python. Achieved 18%
              improvement in customer reorders through predictive analytics and
              data-driven insights.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Open Source Contributor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              GirlScript Summer of Code & Hacktoberfest 2024
            </h4>
            <p>
              Contributed to multiple open source projects. Participated in GSOC
              2024 and Hacktoberfest 2024, improving code quality and
              documentation.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2023 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Hackathon Competitor & Builder
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SJIM HealthTech, Smart Gujarat, MeciaHacks, Tinkerthon 3.0
            </h4>
            <p>
              Participated in 5+ hackathons. Built disease diagnosis apps, IoT
              systems, and AI-powered solutions. Strong track record of
              execution and delivering MVP within short timeframes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
