import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    heroSectionWrapper: {
        height: "calc(100dvh - 5rem)",
        // background: 'var(--bg-primary)',
        background: 'var(--header-bg)',
        transition: 'background-color 0.3s ease',
        position: 'relative',
        width: '100%',
    },
    heroSection: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
    },

    nameText: {
        fontSize: '4rem',
        fontWeight: '400',
        letterSpacing: '1px',
        margin: 0,
        background: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        transition: 'all 0.3s ease',
    },

    nameWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },

    textAnimationWrapper: {
        marginTop: '1rem',
        height: '3rem',
        width: '32rem',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    },

    heroText: {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },

    '@keyframes fadeText': {
        '0%': {
            opacity: 0,
            transform: 'translateY(6px)',
        },
        '20%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
        '80%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
        '100%': {
            opacity: 0,
            transform: 'translateY(-6px)',
        },
    },

    socialIcon: {
        width: '3rem',
        height: '3rem',
        fontSize: '3rem',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',

        '&:hover': {
            color: 'var(--accent-color)',
            transform: 'scale(1.3) translateY(-4px)',
            filter: 'drop-shadow(0 8px 16px rgba(99, 102, 241, 0.4))',
        },
    },

    logoWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
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

   btnContainer : {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },




}));

export default useStyles;