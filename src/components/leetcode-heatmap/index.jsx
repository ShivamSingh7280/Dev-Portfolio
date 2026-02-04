import React, { useMemo } from "react";
import useStyles from "./index.styles";

const LEETCODE_PROFILE = "https://leetcode.com/u/thakurshivam7280/";

const generateActivityData = () => {
  const data = [];
  const today = new Date();

  for (let i = 365; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const active = Math.random() < 0.5;
    let count = 0;
    let difficulty = "easy";

    if (active) {
      count = Math.floor(Math.random() * 5) + 1;
      const r = Math.random();
      if (r < 0.5) difficulty = "easy";
      else if (r < 0.85) difficulty = "medium";
      else difficulty = "hard";
    }

    data.push({
      date: date.toISOString().split("T")[0],
      count,
      difficulty,
    });
  }

  return data;
};

const getLevel = (count) => {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 2) return 2;
  if (count <= 3) return 3;
  return 4;
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const LeetcodeHeatmap = () => {
  const classes = useStyles();
  const data = useMemo(() => generateActivityData(), []);

  const totalSolved = data.reduce((s, d) => s + d.count, 0);

  const stats = useMemo(() => {
    const r = { easy: 0, medium: 0, hard: 0 };
    data.forEach(d => d.count && (r[d.difficulty] += d.count));
    return r;
  }, [data]);

  /* Build calendar-accurate weeks with month boundaries */
  const weeks = useMemo(() => {
    if (!data || data.length === 0) return [];

    // Align start to the previous Sunday so weeks line up like calendars
    const parsed = data.map((d) => ({ ...d, dateObj: new Date(d.date) }));
    const firstDate = new Date(parsed[0].dateObj);
    const dayOfWeek = firstDate.getDay(); // 0 = Sunday
    const start = new Date(firstDate);
    start.setDate(start.getDate() - dayOfWeek);

    const lastDate = new Date(parsed[parsed.length - 1].dateObj);
    const totalDays = Math.round((lastDate - start) / (24 * 60 * 60 * 1000)) + 1;

    const allDays = [];
    for (let i = 0; i < totalDays; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const iso = d.toISOString().split("T")[0];
      const found = parsed.find((p) => p.date === iso);
      if (found) allDays.push(found);
      else allDays.push({ date: iso, count: 0, difficulty: "easy", dateObj: d });
    }

    const result = [];
    let prevMonth = null;
    for (let i = 0; i < allDays.length; i += 7) {
      const days = allDays.slice(i, i + 7);
      const month = new Date(days[0].date).getMonth();

      result.push({
        days,
        isNewMonth: prevMonth !== null && month !== prevMonth,
        month,
      });

      prevMonth = month;
    }

    return result;
  }, [data]);

  const monthPositions = useMemo(() => {
    const positions = [];
    const seen = new Set();
    weeks.forEach((w, i) => {
      // find if week contains first day of month
      const containsFirst = w.days.some((d) => new Date(d.date).getDate() === 1);
      if (!seen.has(w.month) && containsFirst) {
        positions.push({ month: MONTHS[w.month], index: i });
        seen.add(w.month);
      }
      // fallback: if month not yet recorded and the week starts the month
      if (!seen.has(w.month) && i === 0) {
        positions.push({ month: MONTHS[w.month], index: i });
        seen.add(w.month);
      }
    });
    return positions;
  }, [weeks]);

  return (
    <div className={classes.leetcodeHeatmapWrapper}>
      {/* Header */}
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.iconBox}>LC</div>
          <div>
            <h3 className={classes.title}>LeetCode Activity</h3>
            <p className={classes.subtitle}>{totalSolved} problems solved this year</p>
          </div>
        </div>

        <a
          href={LEETCODE_PROFILE}
          target="_blank"
          rel="noreferrer"
          className={classes.profileLink}
        >
          View Profile
        </a>
      </div>

      {/* Stats */}
      <div className={classes.statsGrid}>
        <div className={classes.statCard}>
          <div className={classes.statValue}>{totalSolved}</div>
          <div className={classes.statLabel}>Total Solved</div>
        </div>
        <div className={classes.statCard}>
          <div className={classes.statValue}>Top 15%</div>
          <div className={classes.statLabel}>Global Rank</div>
        </div>
        <div className={classes.statCard}>
          <div className={classes.statValue}>1847</div>
          <div className={classes.statLabel}>Rating</div>
        </div>
      </div>

      {/* Difficulty */}
      <div className={classes.difficultyRow}>
        <div className={`${classes.difficultyPill} ${classes.easy}`}>Easy: {stats.easy}</div>
        <div className={`${classes.difficultyPill} ${classes.medium}`}>Medium: {stats.medium}</div>
        <div className={`${classes.difficultyPill} ${classes.hard}`}>Hard: {stats.hard}</div>
      </div>

      {/* Heatmap */}
      <div className={classes.heatmapContainer}>
        <div className={classes.heatmap}>
          <div className={classes.monthsContainer}>
            {monthPositions.map(m => (
              <span key={m.month} style={{ gridColumn: m.index + 1 }}>
                {m.month}
              </span>
            ))}
          </div>

          <div className={classes.gridWrapper}>
            <div className={classes.days}>
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <div className={classes.weeks}>
              {weeks.map((week, wi) => (
                <div
                  key={wi}
                  className={`${classes.week} ${week.isNewMonth ? classes.monthGap : ""}`}
                >
                  {week.days.map((day, di) => (
                    <div
                      key={di}
                      title={`${day.date}: ${day.count} (${day.difficulty})`}
                      className={`${classes.day} ${classes[`level${getLevel(day.count)}`]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className={classes.legend}>
        <span>Less</span>
        {[0,1,2,3,4].map(l => (
          <div key={l} className={`${classes.day} ${classes[`level${l}`]}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default LeetcodeHeatmap;
