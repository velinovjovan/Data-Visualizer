function CreditsLink() {
  return (
    <p className="mt-24 text-white/70 text-sm text-center">
      Data source:{" "}
      <a
        href="https://opentdb.com"
        className="text-purple-300 hover:text-purple-200 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Trivia DB
      </a>
    </p>
  );
}

export default CreditsLink;
