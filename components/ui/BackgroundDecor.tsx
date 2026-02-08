'use client';

export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-diagonal-lines" />
    </div>
  );
}
