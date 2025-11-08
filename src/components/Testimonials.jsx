import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Unmutte felt like a warm hug on a hard day. I said things I hadn\'t said out loud before.',
    name: 'Ava, 22',
  },
  {
    quote:
      'The AI listener helped me untangle my thoughts, and a human listener followed up. It was seamless and kind.',
    name: 'Sam, 29',
  },
  {
    quote:
      'I love the gentle design. It\'s the first time an app made me feel safe to share.',
    name: 'Noah, 31',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-neutral-900 dark:text-neutral-50">Stories from our community</h2>
        <div className="mt-10 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={i}
                className="min-w-[80%] sm:min-w-[45%] md:min-w-[33%] rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm"
              >
                <blockquote className="text-neutral-700 dark:text-neutral-300">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-neutral-500">{t.name}</figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
