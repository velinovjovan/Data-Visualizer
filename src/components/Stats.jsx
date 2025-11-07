import { stats } from "../assets/stats";
import StatBox from "./StatBox";

function Stats({ isVisible }) {
  return (
    <div
      id="section-stats"
      className={`relative py-16 transition-all duration-1000 ${
        isVisible["section-stats"]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatBox stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
