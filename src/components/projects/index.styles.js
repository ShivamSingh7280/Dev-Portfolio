import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectsWrapper: {
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

    "@media (min-width: 640px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },

  sectionLabel: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "var(--text-secondary)",
    margin: "3rem 0 2rem",
  },

  card: {
    position: "relative",
    padding: "1.5rem",
    borderRadius: "1.25rem",
    background: "var(--bg-secondary)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    transition: "all 0.3s ease",
    animation: "$fadeIn 0.6s ease forwards",
    opacity: 0,

    "&:hover": {
      background: "var(--bg-primary)",
      transform: "translateY(-4px)",
    },
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  folderIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    background: "var(--accent-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  iconRow: {
    display: "flex",
    gap: "0.75rem",
  },

  linkIcon: {
    color: "var(--text-secondary)",
    transition: "color 0.3s ease",

    "&:hover": {
      color: "var(--accent-color)",
    },
  },

  projectTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    transition: "color 0.3s ease",

    "$card:hover &": {
      color: "var(--accent-color)",
    },
  },

  description: {
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "auto",
  },

  tag: {
    fontSize: "0.75rem",
    padding: "0.35rem 0.6rem",
    borderRadius: "6px",
    background: "var(--bg-primary)",
    color: "var(--text-secondary)",
    fontFamily: "monospace",
  },

  featuredBadge: {
    position: "absolute",
    top: "2rem",
    left: "5rem",
    fontSize: "0.7rem",
    fontWeight: 600,
    padding: "0.25rem 0.6rem",
    borderRadius: "999px",
    background: "rgba(245,65,30,0.15)",
    color: "var(--accent-color)",
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(8px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

export default useStyles;
