import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  githubHeatmapWrapper: {
    padding: "3rem 0",
    width: '100vw',
    borderRadius: "1.25rem",
    background: "var(--bg-secondary)",
    animation: "$fadeIn 0.6s ease forwards",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  githubHeatmapInner: {
    width: '80%',
  },

  /* ---------------- Header ---------------- */

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

  /* ---------------- Stats ---------------- */

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

  /* ---------------- Heatmap ---------------- */

  heatmapContainer: {
    overflowX: "auto",
    paddingBottom: "0.5rem",
    width: '100%'
  },

  heatmap: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '0.5rem',
    gridAutoRows: 'auto',
  },

  monthsContainer: {
    gridColumn: '2',
    display: 'grid',
    gridAutoColumns: 'minmax(16px, auto)',
    gap: '4px',
    paddingBottom: '0.5rem',
    marginBottom: '0.25rem',
    borderBottom: '1px solid var(--border-primary)',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    alignItems: 'end',
    height: '1.5rem',
  },

  monthLabel: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },

  gridWrapper: {
    gridColumn: '1 / -1',
    display: "grid",
    gridTemplateColumns: 'auto 1fr',
    gap: "0.5rem",
  },

  days: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.72rem",
    color: "var(--text-secondary)",
    justifyContent: "flex-start",
    paddingRight: "0.25rem",
    fontWeight: '500',
    alignItems: 'center',
  },

  weeks: {
    display: "grid",
    gridAutoColumns: 'minmax(auto, auto)',
    // gap: "4px",
    gridAutoFlow: 'column',
  },

  week: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  day: {
    width: "13px",
    height: "13px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    borderRadius: '50%',

    "&:hover": {
      transform: "scale(1.3)",
    },
  },

  /* ---------------- Levels ---------------- */

  level0: { background: "#e5e7eb" },
  level1: { background: "#9be9a8" },
  level2: { background: "#40c463" },
  level3: { background: "#30a14e" },
  level4: { background: "#216e39" },

  /* ---------------- Legend ---------------- */

  legend: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.4rem",
    marginTop: "1rem",
    fontSize: "0.7rem",
    color: "var(--text-secondary)",
  },

  /* ---------------- Animations ---------------- */

  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(6px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  monthGap: {
  marginLeft: '1rem', // GitHub-like spacing
},

}));

export default useStyles;
