import React, { useEffect, useMemo, useState } from "react";

// styles:
import useStyles from "./index.styles";

// media-query:
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// credentials: 
import { GITHUB_USERNAME, GITHUB_TOKEN } from "../../config/config";



const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const getLevel = (count) => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 8) return 3;
  return 4;
};

const formatDate = (dateObj) => {
  return dateObj.toISOString().split("T")[0];
};

const generateLastYearDates = () => {
  const data = [];
  const today = new Date();

  for (let i = 365; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    data.push({
      date: formatDate(date),
      count: 0,
    });
  }

  return data;
};

const GithubHeatmap = () => {

  const classes = useStyles();

  // media Query:
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // states:
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState(generateLastYearDates());
  const [loading, setLoading] = useState(true);

  const _fetchProfiteData = async() => {
      try {
      
        const URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
        const response = await fetch(URL);
        const data = await response.json();
        setProfile(data);
      } catch(error) {
          console.error("GitHub profile fetch failed:", error);
      }
  }

  useEffect(() => {
    _fetchProfiteData();
  }, []);

  // Fetch commits and map them into daily counts:
  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);

        // Step 1: Build last year date map: 
        const baseData = generateLastYearDates();
        const dateMap = new Map();
        baseData.forEach((d) => dateMap.set(d.date, 0));

        // Step 2: Fetch commits from GitHub Search API:
        // NOTE: Search API is paginated. We'll fetch multiple pages.
        // Max per_page = 100

        const perPage = 100;
        const maxPages = 10; // 10 pages = 1000 commits max

        for (let page = 1; page <= maxPages; page++) {
          const res = await fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=${perPage}&page=${page}`,
            {
              headers: {
                Accept: "application/vnd.github.cloak-preview+json",
                Authorization: `Bearer ${GITHUB_TOKEN}`,
              
              },
            }
          );

          const json = await res.json();

          if (!json.items || json.items.length === 0) break;

          // Step 3: Count commits by date (only last 1 year): 
          
          json.items.forEach((commitItem) => {
            const commitDate = commitItem?.commit?.author?.date;

            if (!commitDate) return;

            const day = commitDate.split("T")[0];

            if (dateMap.has(day)) {
              dateMap.set(day, dateMap.get(day) + 1);
            }
          });

          // If less than perPage returned => last page
          if (json.items.length < perPage) break;
        }

        // Step 4: Merge map back into array
        const finalData = baseData.map((d) => ({
          ...d,
          count: dateMap.get(d.date) || 0,
        }));

        setData(finalData);
      } catch (err) {
        console.error("GitHub commit fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const total = useMemo(
    () => data.reduce((sum, d) => sum + d.count, 0),
    [data]
  );

  const longestStreak = useMemo(() => {
    let max = 0;
    let current = 0;

    data.forEach((d) => {
      if (d.count > 0) {
        current++;
        max = Math.max(max, current);
      } else {
        current = 0;
      }
    });

    return max;
  }, [data]);

  const weeks = useMemo(() => {
    const result = [];
    let prevMonth = null;

    for (let i = 0; i < data.length; i += 7) {
      const weekDays = data.slice(i, i + 7);
      const firstDayOfWeek = new Date(weekDays[0].date);
      const currentMonth = firstDayOfWeek.getMonth();

      const isNewMonth = prevMonth !== null && currentMonth !== prevMonth;

      result.push({
        days: weekDays,
        isNewMonth,
      });

      prevMonth = currentMonth;
    }

    return result;
  }, [data]);

  const monthPositions = useMemo(() => {
    const positions = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = new Date(week.days[0].date);
      const currentMonth = firstDay.getMonth();

      if (currentMonth !== lastMonth) {
        positions.push({
          month: months[currentMonth],
          weekIndex,
        });
        lastMonth = currentMonth;
      }
    });

    return positions;
  }, [weeks]);

  return (
    <div
      className={classes.githubHeatmapWrapper}
      style={{ borderRadius: isMobile || isTablet ? 0 : "" }}
    >
      <div className={classes.githubHeatmapInner}>
       
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <div className={classes.githubIcon}>SS</div>
            <div>
              <h3 className={classes.title}>GitHub Contributions</h3>
              <p className={classes.subtitle}>
                {loading ? "Loading..." : `${total} commits in the last year`}
              </p>
            </div>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className={classes.profileLink}
          >
            View Profile
          </a>
        </div>

        {/* Stats */}
        <div className={classes.statsRow}>
          <div className={classes.statCard}>
            <div className={classes.statValue}>{loading ? "—" : total}</div>
            <div className={classes.statLabel}>Total Commits</div>
          </div>

          <div className={classes.statCard}>
            <div className={classes.statValue}>
              {loading ? "—" : longestStreak}
            </div>
            <div className={classes.statLabel}>Longest Streak</div>
          </div>

          <div className={classes.statCard}>
            <div className={classes.statValue}>
              {profile ? profile.public_repos : "—"}
            </div>
            <div className={classes.statLabel}>Public Repositories</div>
          </div>
        </div>

        {/* Heatmap */}
        <div className={classes.heatmapContainer}>
          <div className={classes.heatmap}>
            {/* Month labels */}
            <div className={classes.monthsContainer}>
              {monthPositions.map((pos, idx) => (
                <div
                  key={`${pos.month}-${idx}`}
                  className={classes.monthLabel}
                  style={{
                    gridColumn: `${pos.weekIndex + 2} / span 1`,
                  }}
                >
                  {pos.month}
                </div>
              ))}
            </div>

            <div className={classes.gridWrapper}>
              <div className={classes.days}>
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              <div className={classes.weeks}>
                {weeks.map((week, wi) => (
                  <div
                    key={wi}
                    className={`${classes.week} ${
                      week.isNewMonth ? classes.monthGap : ""
                    }`}
                  >
                    {week.days.map((day, di) => {
                      const level = getLevel(day.count);

                      return (
                        <div
                          key={`${wi}-${di}`}
                          title={`${day.date}: ${day.count} commits`}
                          className={`${classes.day} ${classes[`level${level}`]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className={classes.legend}>
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} className={`${classes.day} ${classes[`level${l}`]}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GithubHeatmap;
