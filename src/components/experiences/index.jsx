import React from "react";

// styles:
import useStyles from "./index.styles";

// config:
import { EXPERIENCES } from '../../config/helper';
import ExperienceCard from "../experience-card";

// media-query: 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Experiences = () => {

  const classes = useStyles();

  // media Query:
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


  return <div 
  id="experience"
  className={classes.experienceWrapper}
    style={{ padding: isMobile ? '1rem 0 4rem 0' : '',
    gap: isMobile ? '1rem' : ''
     }}
  >
    <h1 className={classes.heading}
      style={{ fontSize: isMobile ? '3rem' : '' }}
    >Experiences</h1>

    <div className={classes.companyWrapper}
      style={{
        flexDirection: (isMobile) ? 'column' : '',
      }}

    >
      {
        EXPERIENCES?.map((item) => (
          <React.Fragment key={item?.id}>
            <ExperienceCard
              companyData={item}
            />
          </React.Fragment>
        ))
      }
    </div>
  </div>;
};

export default Experiences;