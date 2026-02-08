interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles =
    variant === 'accent'
      ? 'bg-accent/8 text-accent-dark border-accent/15'
      : 'bg-slate-100 text-text-secondary border-slate-200';

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${styles}`}
    >
      {children}
    </span>
  );
}
