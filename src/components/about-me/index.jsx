// styles: 
import useStyles from "./index.styles";

// config:
import { ABOUT_ME_INTRODUCTION_TEXT, RESUME_LINK } from '../../config/helper'

import AvatarImg from '../../assets/images/avatar.jpeg';

// media-query: 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const AboutMe = () => {

  const classes = useStyles();

  // media Query:
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

 const handleResumeClick = () => {
  const resumeLink = RESUME_LINK;
  window.open(resumeLink, "_blank", "noopener,noreferrer");
};


  return (
    <div
      id="about"
      className={classes.aboutMeWrapper}
      style={{
        flexDirection: isMobile || isTablet ? 'column' : '',
        padding: isMobile || isTablet ? '3rem 1.5rem' : '',
        minHeight: isMobile || isTablet ? '100%' : '',
        alignItems: isMobile || isTablet ? 'center' : '',
        justifyContent: isMobile || isTablet ? 'center' : '',
      }}
    >

     {(isMobile || isTablet)  && <h1 className={classes.title}>About Me</h1>}
      {/* Avatar Section */}
      <div className={classes.avatarWrapper}>
        <div
          className={classes.avatar}
          style={{
            backgroundImage: `url(${AvatarImg})`,
            height: isMobile || isTablet ? '200px' : '25cqi',
            width: isMobile || isTablet ? '200px' : '25cqi',
          }}
        />
      </div>

      {/* Introduction Section */}
      <div className={classes.introductionWrapper}>
       {(!isMobile && !isTablet)  && <h1 className={classes.title}>About Me</h1>}
        <p className={classes.introductionText}>{ABOUT_ME_INTRODUCTION_TEXT}</p>

       <div className={classes.buttonWrapper}
       style={{
        width: isMobile || isTablet ? '100%' : '',
        display: isMobile || isTablet ? 'flex' : '',
        justifyContent: isMobile || isTablet ? 'center' : '',
        alignItems: isMobile || isTablet ? 'center' : '',
       }}
       >

        <button
          className={classes.resumeButton}
          onClick={handleResumeClick}
          aria-label="Download Resume"
        >
            Resume
        </button>


       </div>

      </div>
    </div>
  );
};

export default AboutMe;