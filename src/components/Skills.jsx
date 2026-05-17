const skills = [
  "React",
  "JavaScript",
  "Python",
  "TailwindCSS",
  "Node.js",
  "SQL",
  "GitHub",
  "Forex Trading",
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills