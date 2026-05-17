import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Khoirul
          <span className="text-cyan-400"> Programmer</span>
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Web Developer, Programmer, Data Analyst,
          Trader & Digital Professional.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a
            href="#portfolio"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero