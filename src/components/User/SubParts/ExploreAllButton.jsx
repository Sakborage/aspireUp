import React from "react";

const ExploreAllButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-800 font-medium text-sm sm:text-base transition-all duration-200"
    >
      Explore All
      <span className="text-base">→</span>
    </button>
  );
};

export default ExploreAllButton;
