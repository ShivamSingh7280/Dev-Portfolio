import React, { useState } from "react";

// styles
import useStyles from "./index.styles";

// config:
import { TECHNICAL_SKILLS, SOFT_SKILLS } from "../../config/helper";


const Skills = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("technical");

  const skills = activeTab === "technical" ? TECHNICAL_SKILLS : SOFT_SKILLS;

  return (
    <section id="skills" className={classes.skillsWrapper}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.header}>
          <h2 className={classes.title}>Skills & Expertise</h2>
          <p className={classes.subtitle}>
            A snapshot of the technical and soft skills I bring to real-world projects.
          </p>
        </div>

        {/* Tabs */}
        <div className={classes.tabWrapper}>
          <button
            className={`${classes.tabButton} ${
              activeTab === "technical" ? classes.activeTab : ""
            }`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </button>

          <button
            className={`${classes.tabButton} ${
              activeTab === "soft" ? classes.activeTab : ""
            }`}
            onClick={() => setActiveTab("soft")}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Grid */}
        <div className={classes.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={classes.card}>
              <div className={classes.cardHeader}>
                <span className={classes.skillName}>{skill.name}</span>
                <span className={classes.proficiency}>
                  {skill.proficiency}%
                </span>
              </div>

              <div className={classes.progressTrack}>
                <div
                  className={classes.progressFill}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
