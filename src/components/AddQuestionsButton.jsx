function AddQuestionsButton({ handleAddQuestions, isDisabled }) {
  return (
    <button
      onClick={handleAddQuestions}
      disabled={isDisabled}
      className={`backdrop-blur-md rounded-xl p-4 shadow-xl border text-white text-bold h-fit py-6 px-5 transition-all duration-300 ${
        isDisabled
          ? "bg-white/5 border-white/10 cursor-not-allowed"
          : "bg-white/10 hover:bg-white/20 hover:scale-105 border-white/20"
      }`}
    >
      Add More Questions
    </button>
  );
}

export default AddQuestionsButton;
