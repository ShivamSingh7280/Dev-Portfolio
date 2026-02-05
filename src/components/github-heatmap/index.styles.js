import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  githubHeatmapWrapper: {
    padding: "3rem 0",
    width: "100vw",
    background: "var(--bg-secondary)",
    animation: "$fadeIn 0.6s ease forwards",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  githubHeatmapInner: {
    width: "80%",

    [theme?.breakpoints?.down("md")]: {
      width: "92%",
    },
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "1rem",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },

  githubIcon: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.75rem",
    background: "#24292f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.9rem",
  },

  title: {
    fontSize: "1.25rem",
    fontWeight: 600,
    margin: 0,
    color: "var(--text-primary)",
  },

  subtitle: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
  },

  profileLink: {
    padding: "0.5rem 0.9rem",
    borderRadius: "0.6rem",
    background: "var(--border-primary)",
    textDecoration: "none",
    fontSize: "0.85rem",
    color: "var(--text-primary)",
    transition: "all 0.3s ease",

    "&:hover": {
      background: "var(--accent-color)",
      color: "#fff",
    },
  },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem",
    marginBottom: "1.5rem",

    [theme?.breakpoints?.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  statCard: {
    padding: "0.75rem",
    borderRadius: "0.75rem",
    background: "var(--bg-primary)",
    textAlign: "center",
  },

  statValue: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "var(--accent-color)",
  },

  statLabel: {
    fontSize: "0.75rem",
    color: "var(--text-secondary)",
  },

  heatmapContainer: {
    width: "100%",
    overflowX: "auto",
    paddingBottom: "0.5rem",
  },

  calHeatmapWrapper: {
    width: "100%",
    minWidth: "760px",
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(6px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

export default useStyles;
