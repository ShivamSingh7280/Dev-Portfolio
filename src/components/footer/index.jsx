import React from "react";

// styles
import useStyles from "./index.styles";

// MUI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const classes = useStyles();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFooterNav = (hash) => {
    const id = (hash || '').replace('#','');
    const el = document.getElementById(id);
    const header = document.getElementById('site-header');
    const headerHeight = header ? header.clientHeight : 0;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.grid}>
          {/* Brand */}
          <div>
            <h3 className={classes.brandTitle}>
              Shivam <span className={classes.gradientText}>Singh</span>
            </h3>
            <p className={classes.description}>
              A passionate full-stack developer crafting digital experiences
              with clean code and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={classes.sectionTitle}>Quick Links</h4>
            <div style={{display: 'flex',gap: '2rem', alignItems: 'center', justifyContent: 'space-between',}}>


            <ul className={classes.linkList}>
              {["Skills", "About", "Experience"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={classes.link}
                    onClick={(e) => { e.preventDefault(); handleFooterNav(`#${item.toLowerCase()}`); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleFooterNav(`#${item.toLowerCase()}`); } }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <ul className={classes.linkList}>
              {["Certifications", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={classes.link}
                    onClick={(e) => { e.preventDefault(); handleFooterNav(`#${item.toLowerCase()}`); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleFooterNav(`#${item.toLowerCase()}`); } }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={classes.sectionTitle}>Get In Touch</h4>
            <ul className={classes.linkList}>
              <li>
                <a href="mailto:shivamsingh7280@gmail.com" className={classes.link}>
                  shivamsingh7280@gmail.com
                </a>
              </li>
              <li className={classes.link}>India</li>
              <li className={classes.availability}>
                <span className={classes.pulseDot} />
                Open to opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={classes.bottomBar}>
        <div className={classes.bottomContent}>
          <p className={classes.copyright}>
            © {currentYear} Shivam Singh. All rights reserved.
          </p>
          <p className={classes.builtWith}>
            {/* Built with <FavoriteIcon fontSize="small" color="error" /> using React & MUI */}
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button className={classes.scrollTop} onClick={scrollToTop}>
        <KeyboardArrowUpIcon />
      </button>
    </footer>
  );
};

export default Footer;
