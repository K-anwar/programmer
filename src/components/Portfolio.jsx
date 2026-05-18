const projects = [
  {
    title: "Trading Dashboard",
    desc: "Forex and crypto market analysis dashboard.",
    image: `${import.meta.env.BASE_URL}projects/trading.jpg`,
  },
  {
    title: "Wedding Invitation",
    desc: "Premium digital wedding invitation website.",
    image: `${import.meta.env.BASE_URL}projects/wedding.jpg`,
  },
  {
    title: "Data Analyst Dashboard",
    desc: "Interactive analytics dashboard using Power BI.",
    image: `${import.meta.env.BASE_URL}projects/dashboard.jpg`,
  },
  {
    title: "Company Profile",
    desc: "Modern responsive business website.",
    image: `${import.meta.env.BASE_URL}projects/company.jpg`,
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio