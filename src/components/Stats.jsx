function Stats() {

  const stats = [
    { number: "20+", label: "Projects" },
    { number: "5+", label: "Skills" },
    { number: "3+", label: "Years Learning" },
    { number: "100%", label: "Passion" },
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
          >

            <h3 className="text-4xl font-bold text-cyan-400 mb-2">
              {item.number}
            </h3>

            <p className="text-gray-400">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Stats