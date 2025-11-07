import { ArrowRight } from "lucide-react";

function ButtonDark({ text }) {
  return (
    <button className="group px-8 py-4 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50 flex items-center justify-center space-x-2">
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}

export default ButtonDark;
