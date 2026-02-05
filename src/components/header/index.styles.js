import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    width: '100vw',
    height: '5rem',
    background: 'var(--header-bg)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.08)',
    padding: '0 4rem',
    display: 'flex',
    transition: 'background-color 0.3s ease',
  },

  headerDs: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightNavigationDs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  navigationDataWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  navigationText: {
    padding: '0 1rem',
    fontWeight: '500',
    fontSize: '1rem',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--accent-color)',
    },
  },
  logoWrapper: {
    height: '3rem',
    width: '3rem',
    border: '3px solid var(--border-primary)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      color: 'var(--accent-color)',
      borderColor: 'var(--accent-color)',
    },
  },
  skillsAnimationWrapper: {
    position: 'relative',
    width: '9rem',
    height: '3rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme?.breakpoints?.up('sm')]: {
      width: '9rem'
    },

    [theme?.breakpoints?.up('md')]: {
      width: '12rem',
    },
  },

  skillIcon: {
    position: 'absolute',
    width: '3rem',
    height: '3rem',
    objectFit: 'contain',
    animation: '$slideContinuous 2.5s linear',
  },

  modeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '0.5rem',
    borderRadius: '8px',
    
    '&:hover': {
      color: 'var(--accent-color)',
      transform: 'rotate(20deg) scale(1.1)',
      background: 'var(--accent-color)',
      background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.2))',
    },
  },

  '@keyframes slideContinuous': {
    '0%': {
      transform: 'translateX(120%)',
      opacity: 0,
    },
    '5%': {
      opacity: 1,
    },
    '95%': {
      opacity: 1,
    },
    '100%': {
      transform: 'translateX(-140%)',
      opacity: 0,
    },
  },

  headerMb: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  hamburgerIcon: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: 'var(--text-primary)',
  },

  mobileMenuOverlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    background: 'var(--bg-primary)',
    zIndex: 1300,
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    transform: 'translateX(100%)',
    transition: 'transform 0.35s ease-in-out',
    opacity: 0,
  },

  mobileMenuOpen: {
    transform: 'translateX(0)',
    opacity: 1,
  },

  mobileMenuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  closeIcon: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: 'var(--text-primary)',
  },

  mobileNavList: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },

  mobileNavItem: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    transition: 'color 0.3s ease',

    '&:hover': {
      color: 'var(--accent-color)',
    },
  },
  rightNavigationMb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  locationWrapper: {
    display: "grid",
    alignItems: "center",
    justifyItems: "flex-start",
    gap: "0.6rem",
    height: "1.5rem",
    overflow: "hidden",
    gridTemplateColumns: "auto 1fr",
    padding: '0 1rem',
  },

  locationDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "var(--accent-color)",
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      backgroundColor: "var(--accent-color)",
      opacity: 0.6,
      animation: "$pulse 1.5s infinite",
    },
  },

  locationCity: {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "var(--text-secondary)",
    whiteSpace: "nowrap",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '10rem',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    opacity: 1,
    transform: 'translateY(0)',
  },

  "@keyframes pulse": {
    "0%": { transform: "scale(1)", opacity: 0.6 },
    "70%": { transform: "scale(2.2)", opacity: 0 },
    "100%": { opacity: 0 },
  },

  "@keyframes fadeText": {
    "0%": { opacity: 0 },
    "15%": { opacity: 1 },
    "85%": { opacity: 1 },
    "100%": { opacity: 0 },
  },





}));

export default useStyles;