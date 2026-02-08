import { ReactNode, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
  };

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/20 hover:shadow-accent/30',
    outline:
      'border border-slate-300 text-text-primary hover:bg-accent/5 hover:border-accent hover:text-accent',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-slate-100',
  };

  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
