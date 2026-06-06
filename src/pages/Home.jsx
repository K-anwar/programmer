import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Trading from '../components/Trading';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';
import { ProfitLossChart, WinRatePie } from '../components/Charts';

export default function Home() {
  return (
    <main>
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><Stats /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Portfolio /></ScrollReveal>
      
      {/* Data Analyst Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Analytics Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-4">Profit/Loss Trend</h3>
              <ProfitLossChart />
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-4">Win Rate</h3>
              <WinRatePie />
            </div>
          </div>
        </div>
      </section>
      
      <ScrollReveal><Trading /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
    </main>
  );
}