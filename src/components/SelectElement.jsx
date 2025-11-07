function SelectElement({ setSelectedCategory, selectedCategory, categories }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
        <label className="sm:inline hidden mr-3 text-white font-medium text-sm sm:text-base">
          Filter by Category:
        </label>
        <select
          className="p-2 rounded-lg border border-purple-300 shadow-sm bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectElement;
