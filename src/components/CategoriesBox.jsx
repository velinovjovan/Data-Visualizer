import BarChartElement from "./BarChartElement";
import LoadingEL from "./LoadingEL";

function CategoriesBox({ categoryData, selectedCategory }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 lg:p-8 hover:shadow-purple-500/20 transition-shadow duration-300">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <span className="w-2 h-6 bg-blue-500 mr-3 rounded"></span>
        Questions by Category
      </h2>
      {categoryData.length > 0 ? (
        <BarChartElement
          categoryData={categoryData}
          selectedCategory={selectedCategory}
        />
      ) : (
        <LoadingEL />
      )}
    </div>
  );
}

export default CategoriesBox;
