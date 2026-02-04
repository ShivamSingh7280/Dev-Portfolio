import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contactWrapper: {
    padding: '0 0 2rem 0',
    background: 'var(--bg-primary)',
    width: '100vw',
    transition: 'background-color 0.3s ease',
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
    marginBottom: '0.75rem',
    color: 'var(--text-primary)',
  },

  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '650px',
    margin: '0 auto',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',

    '@media (min-width: 1024px)': {
      gridTemplateColumns: '3fr 2fr',
    },
  },

  card: {
    padding: '2rem',
    borderRadius: '1.25rem',
    background: 'var(--bg-secondary)',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    width: '100%',
  },

  formContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '1rem',
    flexDirection: 'column',
  },

  input: {
    background: 'var(--bg-primary)',
  },

  textarea: {
    resize: 'none',
  },

  submitButton: {
    marginTop: '1.5rem',
    padding: '0.75rem',
    fontWeight: 600,
  },

  infoCard: {
    padding: '1.5rem',
    borderRadius: '1.25rem',
    background: 'var(--bg-secondary)',
    marginBottom: '1.5rem',
  },

  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    background: 'var(--bg-primary)',
    marginBottom: '0.75rem',
  },

  infoContent: {
    flex: 1, // 👈 pushes copy icon to the right
  },

  copyIcon: {
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease, transform 0.2s ease',

    '&:hover': {
      color: 'var(--accent-color)',
      transform: 'scale(1.1)',
    },
  },

  socialLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },

  socialButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.75rem',
    background: 'var(--bg-primary)',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontWeight: 500,
    transition: 'all 0.3s ease',

    '&:hover': {
      background: 'var(--accent-color)',
      color: '#fff',
    },
  },
}));

export default useStyles;
