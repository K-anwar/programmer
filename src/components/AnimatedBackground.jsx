function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Glow 1 */}
      <div className="absolute -top-150 -left-150 w-500 h-500 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Glow 2 */}
      <div className="absolute -bottom-150 -right-150 w-500 h-500 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Glow 3 */}
      <div className="absolute top-[40%] left-[40%] w-75 h-75 bg-purple-500/10 rounded-full blur-3xl animate-float" />
    </div>
  );
}

export default AnimatedBackground;