const projects = [
  {
    title: "Trading Dashboard",
    desc: "Forex and crypto market analysis dashboard."
  },
  {
    title: "Wedding Invitation",
    desc: "Premium digital wedding invitation website."
  },
  {
    title: "Data Analyst Dashboard",
    desc: "Interactive analytics dashboard using Power BI."
  },
  {
    title: "Company Profile",
    desc: "Modern responsive business website."
  },
]

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
              className="bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio