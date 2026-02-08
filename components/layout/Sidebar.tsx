'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, profile } from '@/lib/data';
import useScrollSpy from '@/hooks/useScrollSpy';

const sectionIds = navItems.map((item) => item.sectionId);

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-lg border border-slate-200 rounded-lg shadow-card hover:border-accent/30 hover:shadow-card-hover transition-all"
        aria-label="Toggle navigation"
      >
        <div className="w-5 flex flex-col gap-1.5">
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-full bg-text-primary rounded-full"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-0.5 w-full bg-text-primary rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-full bg-text-primary rounded-full"
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-screen w-64 bg-white/95 backdrop-blur-xl border-r border-slate-200 flex flex-col justify-between z-40 shadow-elevated"
            >
              <div className="pt-8 px-6">
                <a
                  href="#hero"
                  onClick={(e) => handleClick(e, '#hero')}
                  className="block mb-10 mt-8"
                >
                  <span className="text-lg font-bold font-display text-text-primary tracking-tight">
                    {profile.name}
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
                            className="absolute inset-0 bg-accent/8 border border-accent/15 rounded-lg"
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
                <div className="h-px bg-slate-100 mb-4" />
                <p className="text-xs text-text-muted">
                  &copy; {new Date().getFullYear()} {profile.name}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
