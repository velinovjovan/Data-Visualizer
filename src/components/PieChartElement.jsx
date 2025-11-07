import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { colors } from "../assets/colors";

function PieChartElement({ difficultyData }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={difficultyData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          fill="#8884d8"
          label
        >
          {difficultyData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <Legend
          content={() => (
            <ul className="flex justify-center gap-6 mt-4">
              {difficultyData.map((entry, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <span
                    className="w-4 h-4 inline-block rounded-full mr-2"
                    style={{
                      backgroundColor: colors[index],
                    }}
                  ></span>
                  {entry.name}
                </li>
              ))}
            </ul>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartElement;
