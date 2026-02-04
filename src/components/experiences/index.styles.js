import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  experienceWrapper: {
    background: 'var(--bg-primary)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem',
    gap: '3rem',
    transition: 'background-color 0.3s ease',
    flexDirection: 'column',
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

    heading: {
        fontSize: '4rem',
        fontWeight: '600',
        letterSpacing: '1px',
        margin: 0,
        background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        transition: 'all 0.3s ease',
    },
    companyWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      width: '90%',
    }

}));

export default useStyles;