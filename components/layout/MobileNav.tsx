'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/data';
import useScrollSpy from '@/hooks/useScrollSpy';

const sectionIds = navItems.map((item) => item.sectionId);

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

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
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-bg-card/90 backdrop-blur-lg border border-white/10 rounded-lg"
        aria-label="Toggle navigation"
      >
        <div className="w-5 flex flex-col gap-1.5">
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-full bg-text-primary rounded-full"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-full bg-text-primary rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
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
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-64 bg-bg-secondary/95 backdrop-blur-xl border-l border-white/5 z-40 p-8 pt-20"
            >
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeId === item.sectionId;
                  return (
                    <a
                      key={item.sectionId}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
