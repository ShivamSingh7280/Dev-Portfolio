import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: 'var(--font-primary)',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    position: 'relative',
    overflow: 'hidden',

    '&:hover:not(:disabled)': {
      transform: 'translateY(-2px)',
      boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
    },

    '&:active:not(:disabled)': {
      transform: 'translateY(0)',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '0',
      height: '0',
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

  // Variants
  'variant-primary': {
    background: 'var(--button-primary)',
    color: '#ffffff',
    border: '1px solid var(--button-primary)',

    '&:hover:not(:disabled)': {
      background: 'var(--button-primary-hover)',
      borderColor: 'var(--button-primary-hover)',
    },
  },

  'variant-secondary': {
    background: 'var(--secondary-color)',
    color: '#ffffff',
    border: '2px solid var(--secondary-color)',

    '&:hover:not(:disabled)': {
      background: '#db2777',
      borderColor: '#db2777',
    },
  },

  'variant-ghost': {
    background: 'transparent',
    color: 'var(--accent-color)',
    border: '2px solid var(--button-ghost-border)',

    '&:hover:not(:disabled)': {
      background: 'var(--accent-color)',
      color: '#ffffff',
      borderColor: 'var(--accent-color)',
    },
  },

  'variant-outline': {
    background: 'transparent',
    color: 'var(--accent-color)',
    border: '2px solid var(--accent-color)',

    '&:hover:not(:disabled)': {
      background: 'var(--bg-secondary)',
    },
  },

  // Sizes
  'size-sm': {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
  },

  'size-md': {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
  },

  'size-lg': {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',

    '&:hover': {
      transform: 'none',
      boxShadow: 'none',
    },
  },
}));

export default useStyles;
