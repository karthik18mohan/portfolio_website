'use client';

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-diagonal-lines" />

      <div className="absolute top-[8%] left-[4%] w-[220px] h-[220px] rounded-2xl border border-blue-400/15 bg-blue-400/[0.03] shadow-[0_0_40px_rgba(59,130,246,0.08)] animate-float-slow" />

      <div className="absolute top-[5%] right-[3%] w-[180px] h-[180px] rounded-2xl border border-blue-400/12 bg-blue-400/[0.02] shadow-[0_0_35px_rgba(59,130,246,0.07)] rotate-12 animate-float-slower" />

      <div className="absolute top-[32%] right-[2%] w-[200px] h-[260px] rounded-2xl border border-blue-400/15 bg-blue-400/[0.03] shadow-[0_0_45px_rgba(59,130,246,0.09)] animate-float-slow" />

      <div className="absolute top-[28%] left-[2%] w-[160px] h-[200px] rounded-2xl border border-blue-400/10 bg-blue-400/[0.02] shadow-[0_0_30px_rgba(59,130,246,0.06)] -rotate-6 animate-float-slower" />

      <div className="absolute top-[55%] left-[3%] w-[240px] h-[180px] rounded-2xl border border-blue-400/12 bg-blue-400/[0.025] shadow-[0_0_40px_rgba(59,130,246,0.08)] rotate-3 animate-float-slow" />

      <div className="absolute top-[60%] right-[4%] w-[190px] h-[190px] rounded-2xl border border-blue-400/15 bg-blue-400/[0.03] shadow-[0_0_35px_rgba(59,130,246,0.07)] -rotate-12 animate-float-slower" />

      <div className="absolute top-[80%] left-[5%] w-[200px] h-[160px] rounded-2xl border border-blue-400/10 bg-blue-400/[0.02] shadow-[0_0_35px_rgba(59,130,246,0.07)] rotate-6 animate-float-slower" />

      <div className="absolute top-[82%] right-[3%] w-[220px] h-[200px] rounded-2xl border border-blue-400/12 bg-blue-400/[0.025] shadow-[0_0_40px_rgba(59,130,246,0.08)] -rotate-3 animate-float-slow" />
    </div>
  );
}
