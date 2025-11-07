import { BarChart3, Database, Layers, TrendingUp } from "lucide-react";
import { features } from "../assets/features";
import FeatureBox from "./FeatureBox";

const icons = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    icon: <Database className="w-8 h-8" />,
  },
  {
    icon: <Layers className="w-8 h-8" />,
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

function Features({ isVisible }) {
  return (
    <div
      id="section-features"
      className={`relative py-20 transition-all duration-1000 ${
        isVisible["section-features"]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to explore and understand trivia data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FeatureBox feature={feature} idx={idx}>
              {icons[idx].icon}
            </FeatureBox>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
