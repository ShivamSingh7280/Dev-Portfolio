import React, { useEffect, useState } from 'react'

// styles:
import useStyles from './index.styles';

// media-query: 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// config:
import { HERO_TEXTS, SOCIAL_MEDIA_LOGOS } from '../../config/helper';

// icons:
import LeetCodeIcon from '../../config/icons/leetcode';

// material-ui:
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button } from '@mui/material';

import { toast } from "react-toastify";



const HeroSection = () => {

  const classes = useStyles();

  // media Query:
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % HERO_TEXTS.length);
    }, 4000); // 2 seconds per text

    return () => clearInterval(interval);
  }, []);

  const _handleSocialIconClick = (link, name) => {
    if (!link) {
      toast.warning(`Sorry, I'm currently not available on ${name}.`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };




  return (
    <div id="home" className={classes.heroSectionWrapper}>

      <div className={classes.heroSection}
        style={{
          top: isMobile ? '45%' : ''
        }}
      >

        <div className={classes.nameWrapper}>
          <h1 className={classes.nameText}>SHIVAM SINGH</h1>

          <div className={classes.textAnimationWrapper}
            style={{
              width: (isMobile || isTablet) ? '20rem' : ''
            }}
          >
            <p
              key={currentText}
              className={classes.heroText}
            >
              {HERO_TEXTS[currentText].label}
            </p>
          </div>
        </div>


        {/* Wrapper 2 */}

        <div className={classes.logoWrapper}>
          {
            SOCIAL_MEDIA_LOGOS.map((item) => {
              if (item.type === 'icon') {
                const Icon = item.label;
                return <Icon key={item.id} className={classes.socialIcon}
                  fontSize='large'
                  onClick={() => _handleSocialIconClick(item?.link, item?.name)}
                />
              }

              if (item.type === 'component' && item.label === 'LeetCode') {
                return <LeetCodeIcon key={item.id} className={classes.socialIcon}
                  onClick={() => _handleSocialIconClick(item?.link, item?.name)}

                />;
              }

              return null;
            })
          }
        </div>


        <div className={classes.btnContainer}>

          <button
            className={classes.resumeButton}
            onClick={() => {
              const el = document.getElementById('about');
              const header = document.getElementById('site-header');
              const headerHeight = header ? header.clientHeight : 0;
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            aria-label="Download Resume"
          >
            About Me
          </button>
        </div>
      </div>

    </div>

  )
}

export default HeroSection;