import { useEffect, useState } from "react";
import he from "he";
import axios from "axios";
import DifficultyBox from "../components/DifficultyBox";
import CategoriesBox from "../components/CategoriesBox";
import DataBox from "../components/DataBox";
import CreditsLink from "../components/CreditsLink";
import DataTitle from "../components/DataTitle";
import SelectElement from "../components/SelectElement";
import AddQuestionsButton from "../components/AddQuestionsButton";
import ErrorScreen from "../components/ErrorScreen";

const decode = (string) => {
  const cleaned = string.replace(/[\u200B-\u200D\uFEFF]/g, "");
  const decoded = he.decode(cleaned);
  return decoded;
};

export default function ChartsPage() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://opentdb.com/api.php?amount=50");
      setQuestions(res.data.results);
      const catRes = await axios.get("https://opentdb.com/api_category.php");
      setCategories(catRes.data.trivia_categories);
    };
    fetchData();

    const timer = setTimeout(() => setIsDisabled(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddQuestions = async () => {
    setIsDisabled(true);
    try {
      const res = await axios.get("https://opentdb.com/api.php?amount=50");
      setQuestions((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setIsDisabled(false), 5500);
    }
  };

  const filteredQuestions =
    selectedCategory === "all"
      ? questions
      : questions.filter((q) => decode(q.category) === selectedCategory);

  const questionCounts = questions.reduce((acc, q) => {
    const decodedCategory = decode(q.category);
    acc[decodedCategory] = (acc[decodedCategory] || 0) + 1;
    return acc;
  }, {});

  const categoryData = categories.map((cat) => {
    const decodedName = decode(cat.name);
    return {
      name: decodedName,
      value: questionCounts[decodedName] || 0,
    };
  });

  const difficultyData = ["easy", "medium", "hard"].map((diff) => ({
    name: diff,
    value: filteredQuestions.filter((q) => q.difficulty === diff).length,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 px-5 py-28">
      <div className="max-w-7xl mx-auto">
        <DataTitle />
        <div className="flex justify-center gap-10 flex-wrap mb-10">
          <SelectElement
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
          <AddQuestionsButton
            isDisabled={isDisabled}
            handleAddQuestions={handleAddQuestions}
          />
        </div>
        <DataBox>
          <CategoriesBox
            categoryData={categoryData}
            selectedCategory={selectedCategory}
          />
          <DifficultyBox difficultyData={difficultyData} />
        </DataBox>
        <CreditsLink />
      </div>
    </div>
  );
}
