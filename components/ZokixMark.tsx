export default function ZokixMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zokix logo"
    >
      <defs>
        <linearGradient id="pearl" x1="20" y1="10" x2="80" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fdfcf9" />
          <stop offset="0.4" stopColor="#e8e3d9" />
          <stop offset="0.6" stopColor="#b0a99c" />
          <stop offset="0.8" stopColor="#f2efe8" />
          <stop offset="1" stopColor="#c6c0b3" />
        </linearGradient>
      </defs>
      {/* top spike */}
      <polygon points="52,4 58,25 40,33" fill="url(#pearl)" stroke="#6e685e" strokeWidth="0.7" />
      {/* left arrow */}
      <polygon points="4,50 63,34 45,56" fill="url(#pearl)" stroke="#6e685e" strokeWidth="0.7" />
      {/* central bolt */}
      <polygon points="60,36 78,29 42,76 30,84" fill="url(#pearl)" stroke="#6e685e" strokeWidth="0.7" />
      {/* lower-right arrow */}
      <polygon points="48,65 96,58 71,89" fill="url(#pearl)" stroke="#6e685e" strokeWidth="0.7" />
      {/* lower-left spike */}
      <polygon points="32,79 37,84 12,97" fill="url(#pearl)" stroke="#6e685e" strokeWidth="0.7" />
    </svg>
  );
}
