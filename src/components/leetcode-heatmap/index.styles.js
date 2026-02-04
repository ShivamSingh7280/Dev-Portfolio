import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  leetcodeHeatmapWrapper: {
    padding: "2rem",
    borderRadius: "1.25rem",
    background: "var(--bg-secondary)",
    animation: "$fadeIn 0.6s ease forwards",
  },

  /* ---------- Header ---------- */

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },

  iconBox: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.75rem",
    background: "linear-gradient(135deg,#f59e0b,#ea580c)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
  },

  title: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "var(--text-primary)",
  },

  subtitle: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
  },

  profileLink: {
    padding: "0.5rem 1rem",
    borderRadius: "0.6rem",
    background: "var(--border-primary)",
    fontSize: "0.85rem",
    textDecoration: "none",
    color: "var(--text-primary)",
    transition: "all 0.25s ease",

    "&:hover": {
      background: "var(--accent-color)",
      color: "#fff",
    },
  },

  /* ---------- Stats ---------- */

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
    gap: "0.75rem",
    marginBottom: "1.5rem",
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
    color: "#f59e0b",
  },

  statLabel: {
    fontSize: "0.75rem",
    color: "var(--text-secondary)",
  },

  /* ---------- Difficulty ---------- */

  difficultyRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  },

  difficultyPill: {
    padding: "0.35rem 0.75rem",
    borderRadius: "999px",
    fontSize: "0.8rem",
    fontWeight: 500,
  },

  easy: { background: "rgba(34,197,94,0.15)", color: "#22c55e" },
  medium: { background: "rgba(234,179,8,0.15)", color: "#eab308" },
  hard: { background: "rgba(239,68,68,0.15)", color: "#ef4444" },

  /* ---------- Heatmap ---------- */

  heatmapContainer: {
    overflowX: "auto",
    paddingBottom: "0.5rem",
  },

  heatmap: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "0.5rem",
  },

  monthsContainer: {
    gridColumn: "2",
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "12px",
    gap: "4px",
    paddingLeft: 0,
    marginBottom: "0.25rem",
    fontSize: "0.7rem",
    color: "var(--text-secondary)",
    height: "1.25rem",
    alignItems: "flex-end",
  },

  monthLabel: {
    whiteSpace: "nowrap",
  },

  gridWrapper: {
    gridColumn: "1 / -1",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "0.5rem",
  },

  days: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.7rem",
    color: "var(--text-secondary)",
    justifyContent: "space-between",
    paddingTop: "2px",
  },

  weeks: {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "12px",
    gap: "4px",
  },

  week: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  monthGap: {
    marginLeft: "12px", // GitHub-style month separation
  },

  day: {
    width: "12px",
    height: "12px",
    borderRadius: "3px",
    cursor: "pointer",
    transition: "transform 0.2s ease",

    "&:hover": {
      transform: "scale(1.25)",
    },
  },

  level0: { background: "#e5e7eb" },
  level1: { background: "rgba(180,83,9,0.5)" },
  level2: { background: "rgba(234,179,8,0.6)" },
  level3: { background: "rgba(245,158,11,0.75)" },
  level4: { background: "#f59e0b" },

  legend: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.4rem",
    marginTop: "1rem",
    fontSize: "0.7rem",
    color: "var(--text-secondary)",
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(6px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

export default useStyles;
