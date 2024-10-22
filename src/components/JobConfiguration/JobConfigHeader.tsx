import React from "react";

interface JobConfigHeaderProps {
  activeMode: string;
  onChangeMode: (mode: string) => void;
}

const JobConfigHeader: React.FC<JobConfigHeaderProps> = ({
  activeMode,
  onChangeMode,
}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start max-w-full w-[827px] clickable">
    <h2 className="text-3xl font-bold text-gray-900 tracking-wide">Job Configuration</h2>
    <div className="flex p-1 mt-4 text-sm leading-loose bg-gray-100 rounded-lg border border-solid border-gray-300 shadow-lg">
      <button
        className={`px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer font-bold ${
          activeMode === "even"
            ? "bg-red-500 text-white shadow-md" // Active: red background, white text
            : "bg-white text-red-600 border border-red-500" // Inactive: white background, red text
        }`}
        onClick={() => {
          console.log("Even mode clicked"); // Debugging button click
          if (activeMode !== "even") {
            onChangeMode("even");
          }
        }}
      >
        Even Fan Distribution
      </button>
      <button
        className={` px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer font-bold ${
          activeMode === "individual"
            ? "bg-red-500 text-white shadow-md" // Active: red background, white text
            : "bg-white text-red-600 border border-red-500" // Inactive: white background, red text
        }`}
        onClick={() => {
          console.log("Individual mode clicked"); // Debugging button click
          if (activeMode !== "individual") {
            onChangeMode("individual");
          }
        }}
      >
        Control Individual Fans
      </button>
    </div>
  </div>
  );
};

export default JobConfigHeader;
