import React from "react";

// styles
import useStyles from "./index.styles";

// MUI Icons
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


// config:
import {PROJECTS} from "../../config/helper";

const Projects = () => {
  const classes = useStyles();

  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  const renderCard = (project, index) => (
    <div
      key={project.title}
      className={classes.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={classes.cardHeader}>
        <div className={classes.folderIcon}>
          <FolderIcon />
        </div>
        <div className={classes.iconRow}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={classes.linkIcon}>
              <GitHubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={classes.linkIcon}>
              <OpenInNewIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={classes.projectTitle}>{project.title}</h3>
      <p className={classes.description}>{project.description}</p>

      <div className={classes.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={classes.tag}>
            {tag}
          </span>
        ))}
      </div>

      {project.featured && (
        <span className={classes.featuredBadge}>Featured</span>
      )}
    </div>
  );

  return (
    <section id="projects" className={classes.projectsWrapper}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.header}>
          <h2 className={classes.title}>
            Featured <span className={classes.gradientText}>Projects</span>
          </h2>
          <p className={classes.subtitle}>
            A collection of projects that showcase my skills and passion for building impactful solutions.
          </p>
        </div>

        {/* Featured */}
        <div className={classes.grid}>
          {featured.map(renderCard)}
        </div>

        {/* Other Projects */}
        <h3 className={classes.sectionLabel}>Other Noteworthy Projects</h3>
        <div className={classes.grid}>
          {others.map((p, i) => renderCard(p, i + featured.length))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
