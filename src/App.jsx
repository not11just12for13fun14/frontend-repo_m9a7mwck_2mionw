import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <section id="join" className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="text-2xl sm:text-4xl font-bold">Join the Unmutte Community</h3>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">A gentle space to breathe, share, and feel seen.</p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#start" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02]">Start Talking</a>
              <a href="#learn" className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-6 py-3 text-neutral-700 dark:text-neutral-200 bg-white/70 dark:bg-neutral-900/60 backdrop-blur hover:bg-white/90">Learn More</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="pb-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Unmutte — Where Feelings Find Freedom
      </footer>
    </div>
  );
}

export default App;
