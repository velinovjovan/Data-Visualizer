function FeatureBox({ idx, feature, children }) {
  return (
    <div
      key={idx}
      className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 group"
    >
      <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default FeatureBox;
