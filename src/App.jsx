import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Khoirul
          <span className="text-cyan-400"> Programmer</span>
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg">
          Web Developer, Programmer, Data Analyst,
          Trader & Digital Professional.
        </p>

        <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
          View Portfolio
        </button>
      </div>
    </div>
  );
}

export default App;