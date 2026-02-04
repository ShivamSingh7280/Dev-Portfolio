import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  aboutMeWrapper: {
    minHeight: '75vh',
    background: 'var(--bg-primary)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '5rem',
    gap: '3rem',
    transition: 'background-color 0.3s ease',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-10%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
      opacity: 0.1,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 0,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-20%',
      left: '-10%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, var(--secondary-color) 0%, transparent 70%)',
      opacity: 0.08,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 0,
    },
  },

  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    minWidth: '300px',
  },

  avatar: {
    height: '25cqi',
    width: '25cqi',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '4px solid var(--accent-color)',
    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',

    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 16px 48px rgba(99, 102, 241, 0.4)',
      borderColor: 'var(--secondary-color)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '-4px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: -1,
    },

    '&:hover::after': {
      opacity: 0.2,
    },
  },

  introductionWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.5rem',
    position: 'relative',
    zIndex: 1,
    maxWidth: '600px',
    width: '100%',
  },

  title: {
    fontSize: '3rem',
    fontWeight: '700',
    margin: 0,
    background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
  },

  introductionText: {
    fontWeight: '500',
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.8',
    transition: 'color 0.3s ease',
  },

  resumeButton: {
    textTransform: 'none',
    borderRadius: '8px',
    padding: '0.75rem 2.5rem',
    letterSpacing: '1px',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, var(--accent-color), var(--accent-dark))',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
    alignSelf: 'flex-start',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
    },

    '&:active': {
      transform: 'translateY(0)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 0,
      height: 0,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.6s, height 0.6s',
    },

    '&:active::before': {
      width: '300px',
      height: '300px',
    },
  },


}));

export default useStyles;