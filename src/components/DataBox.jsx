function DataBox({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
      {children}
    </div>
  );
}

export default DataBox;
