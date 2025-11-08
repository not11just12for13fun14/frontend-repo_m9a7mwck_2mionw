import { Shield, Headphones, Bot, Video, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const items = [
    { icon: Bot, title: 'AI Listener', desc: 'Gentle, always-there support with empathetic prompts.' },
    { icon: Headphones, title: 'Human Listener', desc: 'Carefully vetted volunteers ready to hear you.' },
    { icon: Video, title: 'Voice & Video', desc: 'Connect in the way that feels right for you.' },
  ];

  const safety = [
    { icon: Shield, label: 'Encryption' },
    { icon: EyeOff, label: 'Anonymity' },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute -z-[1] inset-0 bg-gradient-to-b from-purple-50/60 via-pink-50/30 to-amber-50/30 dark:from-purple-950/30 dark:via-pink-950/20 dark:to-amber-950/20" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-center text-neutral-900 dark:text-neutral-50"
        >
          Gentle support, on your terms
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          {safety.map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
              <Icon className="h-4 w-4" /> {label}
            </div>
          ))}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
            24/7 Support
          </div>
        </div>
      </div>
    </section>
  );
}
