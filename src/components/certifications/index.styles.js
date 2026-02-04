import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  certificationsWrapper: {
    padding: "4rem 1rem",
    background: "var(--bg-primary)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
    color: "var(--text-primary)",
  },

  gradientText: {
    color: "var(--accent-color)",
  },

  subtitle: {
    color: "var(--text-secondary)",
    maxWidth: "650px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
    alignItems: 'center',
    justifyContent: 'center',

    "@media (min-width: 640px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    // "@media (min-width: 1024px)": {
    //   gridTemplateColumns: "repeat(4, 1fr)",
    // },
  },

  card: {
    position: "relative",
    padding: "1.5rem",
    borderRadius: "1.25rem",
    background: "var(--bg-secondary)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    transition: "all 0.3s ease",
    animation: "$fadeIn 0.6s ease forwards",
    opacity: 0,

    "&:hover": {
      borderRadius: "1.25rem 1.25rem 0 0",
      transform: "scale(1.02)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    },
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "0.5rem",
  },

  badgeRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },

  emoji: {
    fontSize: "2.25rem",
    border: 'none',
  },

  awardIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    background: "rgba(245,65,30,0.15)",
    color: "var(--accent-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  externalLink: {
    color: "var(--text-secondary)",
    padding: "0.4rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",

    "&:hover": {
      color: "var(--accent-color)",
      background: "rgba(245,65,30,0.1)",
    },
  },

  certTitle: {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    transition: "color 0.3s ease",
  },

  issuer: {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
  },

  dateRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    marginTop: "auto",
  },

  gradientBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, var(--accent-color), #ff9f1c)",
    borderBottomLeftRadius: "1.25rem",
    borderBottomRightRadius: "1.25rem",
    opacity: 0,
    transition: "opacity 0.3s ease",

    "$card:hover &": {
      opacity: 1,
    },
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

export default useStyles;
