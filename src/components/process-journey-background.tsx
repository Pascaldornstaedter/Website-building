/**
 * Decorative workflow path behind the process section — inquiry → launch.
 * SVG + gradient only (no external assets).
 */
export function ProcessJourneyBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft depth wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-500/[0.05] via-slate-700/[0.08] to-transparent" />
      <div className="absolute -right-1/4 top-1/4 h-[min(70%,420px)] w-[min(90%,720px)] rounded-full bg-sky-400/[0.07] blur-3xl" />
      <div className="absolute -left-1/4 bottom-0 h-[min(50%,320px)] w-[min(70%,560px)] rounded-full bg-slate-600/30 blur-3xl" />

      {/* Desktop: left-to-right journey behind the 4 cards */}
      <svg
        className="absolute left-1/2 top-[38%] hidden w-[min(1160px,104%)] max-w-none -translate-x-1/2 opacity-[0.35] lg:block lg:h-[220px]"
        viewBox="0 0 1100 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="process-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210 90% 70%)" stopOpacity="0.15" />
            <stop offset="35%" stopColor="hsl(210 90% 70%)" stopOpacity="0.45" />
            <stop offset="70%" stopColor="hsl(220 30% 62%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(210 90% 70%)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="process-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Curved “pipeline” suggesting stages flowing forward */}
        <path
          d="M 72 148 C 220 48, 280 208, 420 118 C 560 28, 640 198, 760 108 C 880 18, 940 168, 1028 98"
          stroke="url(#process-path-grad)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10 14"
          vectorEffect="non-scaling-stroke"
          filter="url(#process-glow)"
        />

        {/* Milestone nodes (roughly above each column) */}
        {[
          { cx: 130, cy: 138 },
          { cx: 390, cy: 108 },
          { cx: 650, cy: 128 },
          { cx: 910, cy: 98 },
        ].map((p, i) => (
          <g key={i} opacity={0.5}>
            <circle cx={p.cx} cy={p.cy} r="14" fill="hsl(210 90% 70%)" opacity="0.12" />
            <circle cx={p.cx} cy={p.cy} r="5" fill="hsl(210 90% 70%)" opacity="0.35" />
          </g>
        ))}

        {/* Forward motion cue */}
        <path
          d="M 1008 88 L 1038 98 L 1008 108"
          stroke="hsl(210 90% 70%)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />
      </svg>

      {/* Mobile / tablet: vertical flow down the section */}
      <svg
        className="absolute left-1/2 top-[28%] h-[min(72%,560px)] w-[120px] -translate-x-1/2 opacity-[0.28] lg:hidden"
        viewBox="0 0 120 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="process-path-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 90% 70%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(210 90% 70%)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="hsl(220 30% 62%)" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path
          d="M 60 32 C 95 120, 25 200, 60 288 C 95 376, 25 456, 60 544 C 78 592, 60 612, 60 628"
          stroke="url(#process-path-grad-v)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 12"
        />
        {[112, 256, 400, 528].map((cy, i) => (
          <g key={i} opacity={0.55}>
            <circle cx="60" cy={cy} r="12" fill="hsl(210 90% 70%)" opacity="0.1" />
            <circle cx="60" cy={cy} r="4" fill="hsl(210 90% 70%)" opacity="0.4" />
          </g>
        ))}
      </svg>
    </div>
  );
}
