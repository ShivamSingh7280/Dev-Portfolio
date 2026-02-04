import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  skillsWrapper: {
    padding: '4rem 1rem',
    background: 'var(--bg-primary)',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  },

  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },

  tabWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2.5rem',
    gap: '0.5rem',
  },

  tabButton: {
    padding: '0.6rem 1.5rem',
    borderRadius: '999px',
    border: '1px solid var(--border-primary)',
    background: 'transparent',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontWeight: 500,
    letterSpacing: '0.05em',
    transition: 'all 0.25s ease',
    fontSize: '1rem',

    '&:hover': {
      color: 'var(--text-primary)',
    },
  },

  activeTab: {
    background: 'var(--accent-color)',
    color: '#fff',
    borderColor: 'var(--accent-color)',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.25rem',
  },

  card: {
    padding: '1.25rem',
    borderRadius: '1rem',
    background: 'var(--bg-secondary)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
    },
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem',
  },

  skillName: {
    fontWeight: 600,
    color: 'var(--text-primary)',
  },

  proficiency: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },

  progressTrack: {
    width: '100%',
    height: '6px',
    borderRadius: '999px',
    background: 'var(--border-primary)',
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: '999px',
    background: 'var(--accent-color)',
    transition: 'width 0.8s ease',
  },
}));

export default useStyles;
