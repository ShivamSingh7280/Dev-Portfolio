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

const formatDate = (dateObj) => {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const generateLastYearDates = () => {

  const data = [];
  const now = new Date();

  const start = new Date(now.getFullYear(), now.getMonth() - 11, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data.push({ date: formatDate(new Date(d)), count: 0 });
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

  // cal refs:
  const calRef = useRef(null);
  const calInstanceRef = useRef(null);

  const _fetchProfileData = async () => {
    try {
      const URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
      const response = await fetch(URL);
      const json = await response?.json();
      setProfile(json);
    } catch (error) {
      console.error("GitHub profile fetch failed:", error);
    }
  };

  useEffect(() => {
    _fetchProfileData();
  }, []);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);

        const from = moment().subtract(1, "year").startOf("day").toISOString();
        const to = moment().endOf("day").toISOString();

        const query = `query contributions($login: String!, $from: DateTime!, $to: DateTime!) {\n  user(login: $login) {\n    contributionsCollection(from: $from, to: $to) {\n      contributionCalendar {\n        totalContributions\n        weeks {\n          contributionDays {\n            date\n            contributionCount\n          }\n        }\n      }\n    }\n  }\n}`;

        const body = JSON.stringify({
          query,
          variables: { login: GITHUB_USERNAME, from, to },
        });

        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body,
        });

        const json = await res.json();

        const weeks =
          json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];

        const baseData = generateLastYearDates();

        const dateMap = new Map();
        baseData.forEach((d) => dateMap.set(d.date, 0));

        weeks.forEach((week) => {
          week.contributionDays.forEach((day) => {
            const date = day.date;
            if (dateMap.has(date)) {
              dateMap.set(date, (dateMap.get(date) || 0) + (day.contributionCount || 0));
            }
          });
        });

        const finalData = baseData.map((d) => ({
          ...d,
          count: dateMap.get(d.date) || 0,
        }));

        setData(finalData);
      } catch (err) {
        console.error("GitHub contributions fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    if (!calRef.current) return;
    if (!data || data.length === 0) return;
    if (loading) return;

    let cancelled = false;

    const run = async () => {
      try {

        calRef.current.innerHTML = "";

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

        const startDate = moment()
          .subtract(10, "months")
          .startOf("month")
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
                textAlign: "middle",
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
            [
              CalendarLabel,
              {
                position: 'left',
                key: 'left',
                text: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                textAlign: 'end',
                width: 40,
                padding: [0, 5, 0, 0],
              },
            ],
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
