# Trivia Data Visualization 📊

An interactive web application built with **React**, **Recharts**, and the **Open Trivia DB API**, allowing users to explore trivia question data visually — including categories, difficulty levels, and more.

---

## 🚀 Features

- **Dynamic Data Fetching** — Loads real trivia questions directly from the [Open Trivia Database](https://opentdb.com/)
- **Category & Difficulty Charts** — Visualize question distribution by category and difficulty using Recharts.
- **Interactive Filtering** — Filter data by category to focus on specific topics.
- **Add More Questions** — Fetch and merge new sets of 50 questions dynamically.
- **Clean, Responsive UI** — Built with Tailwind CSS and modern UI components.

---

## 🧠 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **HTTP Requests:** Axios
- **Data Source:** Open Trivia DB API
- **Utilities:** he (for decoding HTML entities)

---

## 📊 How It Works

1. The app fetches trivia questions and category data from the Open Trivia DB API.
2. It decodes any HTML entities (like `&amp;`, `&quot;`, etc.) for clean display.
3. Category and difficulty distributions are visualized using Recharts.
4. Users can add more questions or filter by category to explore the data interactively.
