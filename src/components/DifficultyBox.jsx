import PieChartElement from "./PieChartElement";
import LoadingEL from "./LoadingEL";

function DifficultyBox({ difficultyData }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 lg:p-8 hover:shadow-purple-500/20 transition-shadow duration-300">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <span className="w-2 h-6 bg-orange-500 mr-3 rounded"></span>
        Questions by Difficulty
      </h2>
      {difficultyData.some((d) => d.value > 0) ? (
        <PieChartElement difficultyData={difficultyData} />
      ) : (
        <LoadingEL />
      )}
    </div>
  );
}

export default DifficultyBox;
