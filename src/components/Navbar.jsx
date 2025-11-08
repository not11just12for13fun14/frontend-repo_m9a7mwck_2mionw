import { useEffect, useState } from 'react';
import { Heart, Moon, SunMedium, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all ${
      scrolled ? 'scale-100' : 'scale-100'
    }`}>
      <nav
        aria-label="Primary"
        className={`backdrop-blur-xl border rounded-full px-4 sm:px-6 py-2.5 flex items-center gap-4 shadow-lg transition-all ${
          scrolled
            ? 'bg-white/65 dark:bg-neutral-900/60 border-white/30 dark:border-white/10'
            : 'bg-white/55 dark:bg-neutral-900/50 border-white/25 dark:border-white/10'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-400 via-pink-300 to-amber-200 shadow">
            <Heart className="h-4 w-4 text-white" />
          </span>
          <span className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">Unmutte</span>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li><a className="hover:text-purple-600 dark:hover:text-purple-400 transition" href="#features">Features</a></li>
          <li><a className="hover:text-purple-600 dark:hover:text-purple-400 transition" href="#testimonials">Stories</a></li>
          <li><a className="hover:text-purple-600 dark:hover:text-purple-400 transition" href="#join">Join</a></li>
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <a href="#mood" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 px-3 py-1.5 text-white shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Mood Tracker</span>
          </a>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/70 text-neutral-700 shadow hover:bg-white/90 dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {dark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#start"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-xl transition-transform hover:scale-[1.02]"
          >
            Start Talking
          </a>
        </div>
      </nav>
    </div>
  );
}
