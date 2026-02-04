import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  experienceCard: {
    width: '100%',
    padding: '2rem 0rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',      // 🔥 center everything
    textAlign: 'center',
    gap: '0.5rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
    },
  },

  cardImg: {
    width: '15cqi',
    height: '15cqi',
    borderRadius: '50%',       // 🔥 circle
    overflow: 'hidden',        // 🔥 clip image
    border: '2px solid var(--border-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
    background: '#fff',        // optional (good for logos)
  },

  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',      // 🔥 logo fits inside circle
  },

  companyName: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: 0,
    color: 'var(--text-primary)',
  },

  designation: {
    fontSize: '0.95rem',
    fontWeight: 500,
    margin: 0,
    color: 'var(--text-secondary)',
  },

  timePeriod: {
    fontSize: '0.85rem',
    margin: 0,
    color: 'var(--text-secondary)',
  },
}));

export default useStyles;
