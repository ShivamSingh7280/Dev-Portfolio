import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    borderTop: "1px solid var(--border-primary)",
    background: "var(--bg-secondary)",

  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2.5rem",

    "@media (min-width: 640px)": {
      gridTemplateColumns: "1fr 1fr",
    },

    "@media (min-width: 1024px)": {
      gridTemplateColumns: "2fr 1fr 1fr",
    },
  },

  brandTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    marginBottom: "0.75rem",
  },

  gradientText: {
    color: "var(--accent-color)",
  },

  description: {
    color: "var(--text-secondary)",
    maxWidth: "420px",
    marginBottom: "1.5rem",
  },

  socialRow: {
    display: "flex",
    gap: "0.75rem",
  },

  socialIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    background: "var(--bg-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-secondary)",
    transition: "all 0.3s ease",
    cursor: "pointer",

    "&:hover": {
      background: "var(--accent-color)",
      color: "#fff",
      transform: "scale(1.1)",
    },
  },

  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "1rem",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  link: {
    color: "var(--text-secondary)",
    textDecoration: "none",
    transition: "color 0.3s ease",

    "&:hover": {
      color: "var(--accent-color)",
    },
  },

  availability: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "var(--accent-color)",
    fontWeight: 500,
  },

  pulseDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "var(--accent-color)",
    animation: "$pulse 1.5s infinite",
  },

  bottomBar: {
    borderTop: "1px solid var(--border-primary)",
    padding: "1.5rem 1rem",
  },

  bottomContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    alignItems: "center",
    justifyContent: "space-between",

    "@media (min-width: 640px)": {
      flexDirection: "row",
    },
  },

  copyright: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
  },

  builtWith: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },

  scrollTop: {
    position: "fixed",
    bottom: "1.5rem",
    right: "1.5rem",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "var(--accent-color)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    zIndex: 1000,

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  "@keyframes pulse": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0.4 },
    "100%": { opacity: 1 },
  },
}));

export default useStyles;
