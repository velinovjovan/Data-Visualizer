import { BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

function HomeLink() {
  return (
    <div className="flex items-center space-x-2">
      <Link to={"/"}>
        <div className="flex gap-2 group relative">
          <BarChart3 className="w-8 h-8 text-cyan-400" />
          <span className="pb-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Data Visualizer
          </span>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-700 ease-out"></span>
        </div>
      </Link>
    </div>
  );
}

export default HomeLink;
