import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

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
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Programmer</span>
        </motion.h1>

        <div className="mt-6 text-gray-400 text-lg leading-relaxed">
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'Programmer',
              2000,
              'Data Analyst',
              2000,
              'Forex Trader',
              2000,
              'Digital Professional',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

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