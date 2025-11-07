import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarChartElement({ categoryData, selectedCategory }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={categoryData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="name"
          hide
          angle={-45}
          textAnchor="end"
          height={100}
          interval={0}
          tick={{ fontSize: 10 }}
          stroke="#6b7280"
        />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
          {categoryData.map((entry, index) => {
            const isSelected = entry.name === selectedCategory;
            return (
              <Cell
                key={`cell-${index}`}
                fill={isSelected ? "#A855F7" : "#3B82F6"}
                stroke={isSelected ? "#C084FC" : "none"}
                strokeWidth={isSelected ? 2 : 0}
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartElement;
