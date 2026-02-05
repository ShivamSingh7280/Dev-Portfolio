import React, { useState, useEffect, useRef } from 'react'

// styles:
import useStyles from './index.styles';

// media-query: 
import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// icons:
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// config:
import { NAVIGATION_DATA, SKILLS_LOGOS, LOCATIONS } from '../../config/helper';

// context:
import { useTheme } from '../../context/ThemeContext';


const Header = () => {

  const classes = useStyles();
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);

  // media query:
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  // states:
  const [currentSkill, setCurrentSkill] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [currentLocation, setCurrentLocation] = useState(0);
  const [isLocationAnimating, setIsLocationAnimating] = useState(false);
  const locationTimers = React.useRef({ interval: null, timeout: null });

  useEffect(() => {
    const FADE_DURATION = 400; // ms
    // start interval that triggers a fade-out, then change, then fade-in
    locationTimers.current.interval = setInterval(() => {
      setIsLocationAnimating(true); // fade out
      // after fade duration, update location and fade in
      locationTimers.current.timeout = setTimeout(() => {
        setCurrentLocation((prev) => (prev + 1) % LOCATIONS.length);
        setIsLocationAnimating(false);
      }, FADE_DURATION);
    }, 3000);

    return () => {
      clearInterval(locationTimers.current.interval);
      clearTimeout(locationTimers.current.timeout);
    };
  }, []);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (link) => {
    const id = (link || '').replace('#', '');
    if (!id) return;
    const el = document.getElementById(id);
    const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % SKILLS_LOGOS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);


  return (
    <div
      id="site-header"
      ref={headerRef}
      className={classes.headerWrapper}
      style={{ padding: (isMobile || isTablet) ? '0 2rem' : '' }}>

      {(isMobile || isTablet) ?
        <div className={classes.headerMb}>

          {/* Logo  */}
          <div className={classes.logoWrapper}
          style={
            isMobile ? {
              aspectRatio: '2/1',
              fontSize: '3cqi',
            } : {}
          }
          >Dev</div>

          {/* Location */}
          <div className={classes.locationWrapper}>
            <span className={classes.locationDot} />
            <span
              className={classes.locationCity}
              style={{
                opacity: isLocationAnimating ? 0 : 1,
                transform: isLocationAnimating ? 'translateY(6px)' : 'translateY(0)',
              }}
            >
              {LOCATIONS[currentLocation]}
            </span>
          </div>

          <div className={classes.rightNavigationMb}>

            {/* Theme Toggle */}
            <div
              className={classes.modeContainer}
              onClick={toggleTheme}
              role="button"
              tabIndex={0}
            >
              {theme.name === 'light' ?
                <DarkModeIcon
                  fontSize='large'
                /> :
                <LightModeIcon
                  fontSize='large'
                />
              }
            </div>

            {/* Hamburger */}
            <MenuIcon
              className={classes.hamburgerIcon}
              onClick={openMenu}
              fontSize='large'
            />
          </div>
        </div>
        :
        <div className={classes.headerDs}>

          {/* Logo  */}
          <div className={classes.logoWrapper}>Dev</div>

          {/* Location */}
          <div className={classes.locationWrapper}>
            <span className={classes.locationDot} />
            <span
              className={classes.locationCity}
              style={{
                opacity: isLocationAnimating ? 0 : 1,
                transform: isLocationAnimating ? 'translateY(6px)' : 'translateY(0)',
              }}
            >
              {LOCATIONS[currentLocation]}
            </span>
          </div>


          {/* Right Navigation  */}
          <div className={classes.rightNavigationDs}>
            <ul className={classes.navigationDataWrapper}>
              {
                NAVIGATION_DATA?.map((item) => (
                  <span
                    key={item?.id}
                    className={classes.navigationText}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleNavClick(item.link)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleNavClick(item.link); }}
                  >
                    {item?.label}
                  </span>
                ))
              }
            </ul>

            {/* Dark & Light Mode  */}
            <div
              className={classes.modeContainer}
              onClick={toggleTheme}
              role="button"
              tabIndex={0}
              aria-label="Toggle theme"
            >
              {theme.name === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </div>
          </div>
        </div>
      }


      {/* Mobile Menu Overlay */}
      <div className={`${classes.mobileMenuOverlay} ${menuOpen ? classes.mobileMenuOpen : ''}`}>
        <div className={classes.mobileMenuHeader}>
          <div className={classes.logoWrapper}>Dev</div>

          <CloseIcon
            className={classes.closeIcon}
            onClick={closeMenu}
            fontSize='large'
          />
        </div>

        <nav className={classes.mobileNavList}>
          {NAVIGATION_DATA.map((item) => (
            <span
              key={item.id}
              className={classes.mobileNavItem}
              onClick={() => { handleNavClick(item.link); closeMenu(); }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') { handleNavClick(item.link); closeMenu(); } }}
            >
              {item.label}
            </span>
          ))}
        </nav>
      </div>



    </div >
  )
}

export default Header;