const LeetCodeIcon = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color: 'var(--text-primary)' }}
  >
    {/* Brand orange */}
    <path
      d="M16.47 17.94a1 1 0 01-1.41 0l-5-5a1 1 0 010-1.41l5-5a1 1 0 111.41 1.41L12.18 12l4.29 4.29a1 1 0 010 1.41z"
      fill="#FFA116"
    />
    {/* Theme-aware part */}
    <path
      d="M10.5 4h3a1 1 0 110 2h-3a6 6 0 000 12h3a1 1 0 110 2h-3a8 8 0 010-16z"
      fill="currentColor"
    />
  </svg>
);

export default LeetCodeIcon;
