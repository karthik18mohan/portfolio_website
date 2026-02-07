'use client';

import { motion } from 'framer-motion';
import { navItems } from '@/lib/data';
import useScrollSpy from '@/hooks/useScrollSpy';

const sectionIds = navItems.map((item) => item.sectionId);

export default function Sidebar() {
  const activeId = useScrollSpy(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-56 bg-bg-primary/80 backdrop-blur-xl border-r border-white/5 flex-col justify-between z-40">
      <div className="pt-8 px-6">
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="block mb-10">
          <span className="text-lg font-bold text-text-primary tracking-tight">
            KM
          </span>
          <span className="block text-xs text-text-muted mt-0.5">Portfolio</span>
        </a>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeId === item.sectionId;
            return (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors group"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? 'text-accent font-medium'
                      : 'text-text-muted group-hover:text-text-secondary'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="px-6 pb-6">
        <div className="h-px bg-white/5 mb-4" />
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Karthik Mohan
        </p>
      </div>
    </aside>
  );
}
