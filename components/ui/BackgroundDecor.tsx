'use client';

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.035]" />

      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-[100px] animate-float-slow" />
      <div className="absolute top-[30%] -left-20 w-[400px] h-[400px] rounded-full bg-sky-200/15 blur-[90px] animate-float-slower" />
      <div className="absolute top-[60%] right-[5%] w-[350px] h-[350px] rounded-full bg-cyan-200/15 blur-[80px] animate-float-slow" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-blue-100/20 blur-[100px] animate-float-slower" />

      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96,165,250,0)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.2)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
          <linearGradient id="line-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(96,165,250,0)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.15)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
          <linearGradient id="line-grad-diag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(96,165,250,0)" />
            <stop offset="40%" stopColor="rgba(96,165,250,0.12)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="box-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(96,165,250,0.15)" />
          </filter>
        </defs>

        <line x1="0" y1="18%" x2="100%" y2="18%" stroke="url(#line-grad-1)" strokeWidth="0.5" />
        <line x1="0" y1="42%" x2="100%" y2="42%" stroke="url(#line-grad-1)" strokeWidth="0.5" />
        <line x1="0" y1="68%" x2="100%" y2="68%" stroke="url(#line-grad-1)" strokeWidth="0.5" />
        <line x1="0" y1="88%" x2="100%" y2="88%" stroke="url(#line-grad-1)" strokeWidth="0.5" />

        <line x1="6%" y1="0" x2="6%" y2="100%" stroke="url(#line-grad-v)" strokeWidth="0.5" />
        <line x1="94%" y1="0" x2="94%" y2="100%" stroke="url(#line-grad-v)" strokeWidth="0.5" />

        <rect x="3%" y="8%" width="100" height="100" rx="12" fill="none" stroke="rgba(96,165,250,0.12)" strokeWidth="0.75" filter="url(#box-shadow)" className="animate-drift" />
        <rect x="4.5%" y="9.5%" width="60" height="60" rx="6" fill="rgba(96,165,250,0.03)" stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />

        <rect x="88%" y="6%" width="80" height="80" rx="10" fill="none" stroke="rgba(96,165,250,0.1)" strokeWidth="0.75" filter="url(#box-shadow)" transform="rotate(12, 92%, 10%)" />
        <rect x="90%" y="8%" width="45" height="45" rx="4" fill="rgba(96,165,250,0.025)" stroke="rgba(96,165,250,0.07)" strokeWidth="0.5" transform="rotate(12, 92%, 10%)" />

        <line x1="82%" y1="3%" x2="82%" y2="22%" stroke="rgba(96,165,250,0.1)" strokeWidth="0.5" strokeDasharray="3 8" />
        <line x1="76%" y1="12%" x2="88%" y2="12%" stroke="rgba(96,165,250,0.1)" strokeWidth="0.5" strokeDasharray="3 8" />

        <line x1="2%" y1="30%" x2="22%" y2="30%" stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />
        <line x1="4%" y1="33%" x2="16%" y2="33%" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
        <line x1="6%" y1="36%" x2="11%" y2="36%" stroke="rgba(96,165,250,0.04)" strokeWidth="0.5" />

        <rect x="90%" y="28%" width="70" height="120" rx="8" fill="rgba(96,165,250,0.02)" stroke="rgba(96,165,250,0.1)" strokeWidth="0.75" filter="url(#box-shadow)" />
        <line x1="91%" y1="34%" x2="96%" y2="34%" stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />
        <line x1="91%" y1="37%" x2="95%" y2="37%" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
        <line x1="91%" y1="40%" x2="94%" y2="40%" stroke="rgba(96,165,250,0.04)" strokeWidth="0.5" />

        <path d="M 2% 52% L 8% 48% L 14% 52% L 8% 56% Z" fill="none" stroke="rgba(96,165,250,0.1)" strokeWidth="0.75" />
        <path d="M 5% 52% L 8% 50% L 11% 52% L 8% 54% Z" fill="rgba(96,165,250,0.03)" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />

        <rect x="85%" y="50%" width="110" height="70" rx="8" fill="none" stroke="rgba(96,165,250,0.08)" strokeWidth="0.75" filter="url(#box-shadow)" />
        <rect x="87%" y="52%" width="30" height="20" rx="3" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
        <rect x="90%" y="55.5%" width="30" height="20" rx="3" fill="rgba(96,165,250,0.03)" stroke="rgba(96,165,250,0.05)" strokeWidth="0.5" />

        <line x1="0%" y1="65%" x2="12%" y2="65%" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="3%" cy="65%" r="2" fill="rgba(96,165,250,0.12)" filter="url(#soft-glow)" />

        <rect x="4%" y="74%" width="90" height="90" rx="45" fill="none" stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />
        <rect x="6%" y="76%" width="55" height="55" rx="28" fill="none" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
        <rect x="7.5%" y="78%" width="20" height="20" rx="10" fill="rgba(96,165,250,0.04)" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />

        <line x1="88%" y1="70%" x2="98%" y2="70%" stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />
        <line x1="93%" y1="65%" x2="93%" y2="75%" stroke="rgba(96,165,250,0.08)" strokeWidth="0.5" />
        <rect x="91%" y="68%" width="4" height="4" rx="1" fill="rgba(96,165,250,0.1)" />

        <rect x="84%" y="80%" width="100" height="80" rx="10" fill="none" stroke="rgba(96,165,250,0.1)" strokeWidth="0.75" filter="url(#box-shadow)" />
        <rect x="86%" y="82%" width="60" height="50" rx="5" fill="rgba(96,165,250,0.025)" stroke="rgba(96,165,250,0.07)" strokeWidth="0.5" />
        <line x1="86%" y1="86%" x2="92%" y2="86%" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
        <line x1="86%" y1="89%" x2="90%" y2="89%" stroke="rgba(96,165,250,0.04)" strokeWidth="0.5" />

        <line x1="2%" y1="92%" x2="20%" y2="92%" stroke="rgba(96,165,250,0.07)" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="4%" y1="95%" x2="14%" y2="95%" stroke="rgba(96,165,250,0.05)" strokeWidth="0.5" strokeDasharray="3 6" />

        <circle cx="12%" cy="16%" r="3" fill="rgba(96,165,250,0.15)" filter="url(#soft-glow)" />
        <circle cx="93%" cy="24%" r="2.5" fill="rgba(96,165,250,0.12)" filter="url(#soft-glow)" />
        <circle cx="5%" cy="50%" r="2" fill="rgba(96,165,250,0.1)" filter="url(#soft-glow)" />
        <circle cx="95%" cy="62%" r="2.5" fill="rgba(96,165,250,0.1)" filter="url(#soft-glow)" />
        <circle cx="8%" cy="88%" r="2" fill="rgba(96,165,250,0.1)" filter="url(#soft-glow)" />
        <circle cx="90%" cy="92%" r="3" fill="rgba(96,165,250,0.12)" filter="url(#soft-glow)" />

        <line x1="10%" y1="0" x2="2%" y2="30%" stroke="url(#line-grad-diag)" strokeWidth="0.5" />
        <line x1="92%" y1="40%" x2="85%" y2="65%" stroke="url(#line-grad-diag)" strokeWidth="0.5" />
      </svg>

      <div className="absolute top-[15%] left-[5%] w-16 h-16 border border-blue-300/10 rounded-lg rotate-12 animate-float-slow" />
      <div className="absolute top-[45%] right-[3%] w-10 h-10 border border-blue-300/[0.08] rounded rotate-45 animate-float-slower" />
      <div className="absolute top-[75%] left-[3%] w-8 h-8 border border-blue-300/10 rounded-md -rotate-12 animate-float-slow" />
      <div className="absolute top-[85%] right-[4%] w-14 h-14 border border-blue-300/[0.07] rounded-xl rotate-6 animate-float-slower" />
    </div>
  );
}
