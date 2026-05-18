function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      {/* Glow 1 */}
      <div className="absolute -top-37.5 -left-37.5 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Glow 2 */}
      <div className="absolute -bottom-37.5 -right-37.5 w-125 h-125 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Glow 3 */}
      <div className="absolute top-[40%] left-[40%] w-75 h-75 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>

    </div>
  )
}

export default AnimatedBackground