import TiltCard from './TiltCard';

const projects = [
  {
    id: 1,
    title: "Trading Dashboard",
    category: "Forex & Crypto",
    desc: "Dashboard real-time untuk analisis pasar forex dan cryptocurrency. Menampilkan grafik harga, indikator teknikal, dan sinyal trading otomatis.",
    image: "https://placehold.co/600x400/0a0a2a/00b4d4?text=Trading+Dashboard",
    tags: ["React", "Chart.js", "WebSocket", "TradingView"]
  },
  {
    id: 2,
    title: "Data Analyst Dashboard",
    category: "Business Intelligence",
    desc: "Platform analisis data interaktif dengan visualisasi Power BI & Python. Memudahkan pengambilan keputusan berbasis data real-time.",
    image: "https://placehold.co/600x400/0a0a2a/00b4d4?text=Data+Analyst+Dashboard",
    tags: ["Power BI", "Python", "Pandas", "SQL"]
  },
  {
    id: 3,
    title: "Wedding Invitation Digital",
    category: "Digital Invitation",
    desc: "Undangan pernikahan digital premium dengan desain modern, RSVP online, galeri foto, dan countdown timer.",
    image: "https://placehold.co/600x400/0a0a2a/00b4d4?text=Wedding+Invitation",
    tags: ["React", "Tailwind", "Framer Motion", "EmailJS"]
  },
  {
    id: 4,
    title: "Company Profile",
    category: "Business Website",
    desc: "Website company profile responsif dengan desain modern, dilengkapi halaman layanan, tim, portofolio, dan formulir kontak.",
    image: "https://placehold.co/600x400/0a0a2a/00b4d4?text=Company+Profile",
    tags: ["React", "Bootstrap", "SEO", "Responsive"]
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Berikut adalah beberapa proyek unggulan yang telah saya kerjakan, mencakup berbagai bidang seperti trading, data, undangan digital, dan company profile.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <TiltCard key={project.id} className="h-full">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-500 h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-2">
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;