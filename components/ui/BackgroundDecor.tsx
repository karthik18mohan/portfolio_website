'use client';

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="8%" y="12%" width="120" height="120" rx="8" fill="none" stroke="rgba(147,197,253,0.15)" strokeWidth="1" />
        <rect x="10%" y="14%" width="80" height="80" rx="4" fill="none" stroke="rgba(147,197,253,0.1)" strokeWidth="0.5" />

        <line x1="85%" y1="5%" x2="85%" y2="25%" stroke="rgba(147,197,253,0.12)" strokeWidth="0.75" />
        <line x1="78%" y1="15%" x2="92%" y2="15%" stroke="rgba(147,197,253,0.12)" strokeWidth="0.75" />

        <rect x="88%" y="8%" width="60" height="60" rx="6" fill="none" stroke="rgba(147,197,253,0.1)" strokeWidth="0.75" transform="rotate(15, 92%, 11%)" />

        <line x1="3%" y1="35%" x2="15%" y2="35%" stroke="rgba(147,197,253,0.1)" strokeWidth="0.5" />
        <line x1="5%" y1="38%" x2="12%" y2="38%" stroke="rgba(147,197,253,0.08)" strokeWidth="0.5" />
        <line x1="4%" y1="41%" x2="9%" y2="41%" stroke="rgba(147,197,253,0.06)" strokeWidth="0.5" />

        <rect x="90%" y="32%" width="90" height="90" rx="10" fill="rgba(191,219,254,0.04)" stroke="rgba(147,197,253,0.1)" strokeWidth="0.75" />
        <rect x="92%" y="34%" width="50" height="50" rx="4" fill="none" stroke="rgba(147,197,253,0.07)" strokeWidth="0.5" />

        <circle cx="7%" cy="55%" r="40" fill="none" stroke="rgba(147,197,253,0.08)" strokeWidth="0.5" />
        <circle cx="7%" cy="55%" r="25" fill="none" stroke="rgba(147,197,253,0.06)" strokeWidth="0.5" />

        <rect x="82%" y="52%" width="140" height="1" fill="rgba(147,197,253,0.08)" />
        <rect x="86%" y="56%" width="100" height="1" fill="rgba(147,197,253,0.06)" />
        <rect x="89%" y="60%" width="60" height="1" fill="rgba(147,197,253,0.04)" />

        <rect x="4%" y="70%" width="50" height="50" rx="25" fill="none" stroke="rgba(147,197,253,0.07)" strokeWidth="0.5" />
        <rect x="12%" y="68%" width="30" height="30" rx="3" fill="none" stroke="rgba(147,197,253,0.1)" strokeWidth="0.75" transform="rotate(45, 15%, 70%)" />

        <line x1="88%" y1="72%" x2="95%" y2="72%" stroke="rgba(147,197,253,0.1)" strokeWidth="0.5" />
        <line x1="91.5%" y1="68.5%" x2="91.5%" y2="75.5%" stroke="rgba(147,197,253,0.1)" strokeWidth="0.5" />

        <rect x="85%" y="82%" width="70" height="70" rx="6" fill="none" stroke="rgba(147,197,253,0.08)" strokeWidth="0.75" />
        <rect x="87%" y="84%" width="40" height="40" rx="3" fill="rgba(191,219,254,0.03)" stroke="rgba(147,197,253,0.06)" strokeWidth="0.5" />

        <line x1="2%" y1="90%" x2="18%" y2="90%" stroke="rgba(147,197,253,0.08)" strokeWidth="0.5" strokeDasharray="4 6" />
        <line x1="5%" y1="93%" x2="14%" y2="93%" stroke="rgba(147,197,253,0.06)" strokeWidth="0.5" strokeDasharray="3 5" />

        <circle cx="15%" cy="22%" r="3" fill="rgba(147,197,253,0.12)" filter="url(#glow)" />
        <circle cx="92%" cy="45%" r="2.5" fill="rgba(147,197,253,0.1)" filter="url(#glow)" />
        <circle cx="6%" cy="78%" r="2" fill="rgba(147,197,253,0.1)" filter="url(#glow)" />
        <circle cx="88%" cy="68%" r="1.5" fill="rgba(147,197,253,0.08)" />
      </svg>
    </div>
  );
}
