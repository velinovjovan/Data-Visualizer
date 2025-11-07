function ButtonLight({ children }) {
  return (
    <button className="px-6 py-2 bg-white/80 hover:bg-white/20 hover:text-white hover:text-bold backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20 hover:scale-110">
      {children}
    </button>
  );
}

export default ButtonLight;
