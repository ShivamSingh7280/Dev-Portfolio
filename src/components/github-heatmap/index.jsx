import React, { useEffect, useMemo, useState, useRef } from "react";
import moment from "moment";
import "cal-heatmap/cal-heatmap.css";

// styles:
import useStyles from "./index.styles";

// media-query:
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// credentials:
import { GITHUB_USERNAME, GITHUB_TOKEN } from "../../config/config";

const formatDate = (dateObj) => dateObj.toISOString().split("T")[0];

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

  // cal refs
  const calRef = useRef(null);
  const calInstanceRef = useRef(null);

  const _fetchProfileData = async () => {
    try {
      const URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
      const response = await fetch(URL);
      const json = await response.json();
      setProfile(json);
    } catch (error) {
      console.error("GitHub profile fetch failed:", error);
    }
  };

  useEffect(() => {
    _fetchProfileData();
  }, []);

  // Fetch commits and map them into daily counts:
  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);

        const baseData = generateLastYearDates();
        const dateMap = new Map();
        baseData.forEach((d) => dateMap.set(d.date, 0));

        const perPage = 100;
        const maxPages = 10;

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

          json.items.forEach((commitItem) => {
            const commitDate = commitItem?.commit?.author?.date;
            if (!commitDate) return;

            const day = commitDate.split("T")[0];

            if (dateMap.has(day)) {
              dateMap.set(day, dateMap.get(day) + 1);
            }
          });

          if (json.items.length < perPage) break;
        }

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

  // Render cal-heatmap
  useEffect(() => {
    if (!calRef.current) return;
    if (!data || data.length === 0) return;
    if (loading) return;

    let cancelled = false;

    const run = async () => {
      try {
        // ✅ Fix: Hard clear container to prevent double SVG in StrictMode
        calRef.current.innerHTML = "";

        // Destroy previous instance
        if (calInstanceRef.current) {
          calInstanceRef.current.destroy();
          calInstanceRef.current = null;
        }

        const { default: CalHeatmap } = await import("cal-heatmap");
        const { default: Tooltip } = await import("cal-heatmap/plugins/Tooltip");
        const { default: CalendarLabel } = await import(
          "cal-heatmap/plugins/CalendarLabel"
        );

        if (cancelled) return;

        const heatData = data.map((d) => ({
          date: d.date,
          value: d.count,
        }));

        const cal = new CalHeatmap();

        // GitHub-style alignment
        const startDate = moment()
          .subtract(1, "year")
          .startOf("week")
          .toDate();

        await cal.paint(
          {
            itemSelector: calRef.current,

            date: {
              start: startDate,
            },

            range: 12,

            domain: {
              type: "month",
              gutter: 18,
              label: {
                text: "MMM",
                textAlign: "center",
                position: "bottom",
              },
            },

            subDomain: {
              type: "day",
              width: 13,
              height: 13,
              gutter: 4,
              radius: 3,
            },

            data: {
              source: heatData,
              type: "json",
              x: "date",
              y: "value",
            },

            scale: {
              color: {
                type: "threshold",
                range: ["#e5e7eb", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                domain: [1, 3, 6, 10],
              },
            },
          },
          [
            [
              Tooltip,
              {
                text: (date, value) =>
                  `${moment(date).format("MMM DD, YYYY")} : ${value || 0} commits`,
              },
            ],
            // [
              // CalendarLabel,
              // {
              //   width: 30,
              //   textAlign: "center",
              //   justifyContent: "center",
              //   text: () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              //   padding: [2, 3, 4, 0],
              // },
            // ],
          ]
        );

        calInstanceRef.current = cal;
      } catch (err) {
        console.error("Failed to render cal-heatmap:", err);
      }
    };

    run();

    return () => {
      cancelled = true;

      if (calInstanceRef.current) {
        calInstanceRef.current.destroy();
        calInstanceRef.current = null;
      }

      if (calRef.current) {
        calRef.current.innerHTML = "";
      }
    };
  }, [data, loading]);

  const total = useMemo(() => data.reduce((sum, d) => sum + d.count, 0), [data]);

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
          <div ref={calRef} className={classes.calHeatmapWrapper} />
        </div>
      </div>
    </div>
  );
};

export default GithubHeatmap;
