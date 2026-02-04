import React from "react";

// styles
import useStyles from "./index.styles";

// MUI Icons
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


// config:
import {certifications} from "../../config/helper";

const Certifications = () => {
  const classes = useStyles();

  return (
    <section 
    id="certifications"
    className={classes.certificationsWrapper}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.header}>
          <h2 className={classes.title}>
            <span className={classes.gradientText}>Certifications</span> & Credentials
          </h2>
          <p className={classes.subtitle}>
            Professional certifications that validate my expertise and commitment
            to continuous learning.
          </p>
        </div>

        {/* Grid */}
        <div className={classes.grid}>
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={classes.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={classes.cardHeader}>
                <div className={classes.badgeRow}>
                  <span className={classes.emoji}>{cert.badge}</span>
                  <div className={classes.awardIcon}>
                    <EmojiEventsIcon fontSize="small" />
                  </div>
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.externalLink}
                  >
                    <OpenInNewIcon fontSize="small" />
                  </a>
                )}
              </div>

              <h3 className={classes.certTitle}>{cert.title}</h3>
              <p className={classes.issuer}>{cert.issuer}</p>

              <div className={classes.dateRow}>
                <CalendarMonthIcon fontSize="inherit" />
                <span>Issued {cert.date}</span>
              </div>

              <div className={classes.gradientBar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
