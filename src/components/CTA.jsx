import ButtonDark from "./ButtonDark";
import { Link } from "react-router-dom";

function CTA({ isVisible }) {
  return (
    <div
      id="section-cta"
      className={`relative py-20 transition-all duration-1000 ${
        isVisible["section-cta"]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Dive Into the Data?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start exploring trivia questions from Open Trivia DB with powerful
            visualization tools
          </p>
          <Link to={"/charts"}>
            <ButtonDark text={"Launch App"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTA;
