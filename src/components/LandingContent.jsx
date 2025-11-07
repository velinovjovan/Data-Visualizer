import { Link } from "react-router-dom";
import ButtonDark from "./ButtonDark";

function LandingContent() {
  return (
    <div className="relative">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Visualize Trivia Data
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed px-10">
            Interactive data exploration with React and Open Trivia DB
          </p>
          <Link to={"/charts"}>
            <ButtonDark text={"Start Exploring"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingContent;
