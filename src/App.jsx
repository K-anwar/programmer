import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Trading from "./components/Trading";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">

        <div className="absolute -top-25 -left-25 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-25 -right-25 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      </div>

      <AnimatedBackground />

      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Portfolio />
      <Trading />
      <Contact />
      <Footer />

    </div>
  )
}

export default App