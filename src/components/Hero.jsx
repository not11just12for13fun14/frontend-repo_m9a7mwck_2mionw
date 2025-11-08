import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/95 dark:from-neutral-950/80 dark:via-neutral-950/50 dark:to-neutral-950/95" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50"
        >
          Where <GradientWord>Feelings</GradientWord> Find <GradientWord>Freedom</GradientWord>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
        >
          A soft, safe space to be heard — blending AI warmth and human empathy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#start" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02]">Start Talking</a>
          <a href="#features" className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-6 py-3 text-neutral-700 dark:text-neutral-200 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:bg-white/90">Learn More</a>
        </motion.div>
      </div>
    </section>
  );
}

function GradientWord({ children }) {
  return (
    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-[shine_6s_ease_infinite]">
      {children}
    </span>
  );
}
