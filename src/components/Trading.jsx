function Trading() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Trading Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-gray-400 mb-2">
              Win Rate
            </h3>

            <p className="text-5xl font-bold text-green-400">
              78%
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-gray-400 mb-2">
              Profit Factor
            </h3>

            <p className="text-5xl font-bold text-cyan-400">
              2.3
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-gray-400 mb-2">
              Risk Reward
            </h3>

            <p className="text-5xl font-bold text-yellow-400">
              1:3
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Trading