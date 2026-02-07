interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles =
    variant === 'accent'
      ? 'bg-accent/15 text-accent-light border-accent/20'
      : 'bg-white/5 text-text-secondary border-white/10';

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${styles}`}
    >
      {children}
    </span>
  );
}
