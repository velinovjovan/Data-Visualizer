function StatBox({ stat, idx }) {
  return (
    <div
      key={idx}
      className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {stat.value}
      </div>
      <div className="text-gray-400 font-medium">{stat.label}</div>
    </div>
  );
}

export default StatBox;
