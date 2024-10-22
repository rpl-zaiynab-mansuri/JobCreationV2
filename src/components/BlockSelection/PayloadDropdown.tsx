import React, { useState } from "react";

const PayloadDropdown: React.FC = () => {
  const [selectedPayload, setSelectedPayload] = useState<string>("Q4 Sprayer");

  const payloadImages: Record<string, string> = {
    "Q4 Sprayer": "https://cdn.builder.io/api/v1/image/assets/TEMP/d90c0601f4d0356abfc17d0f377200f9b0b5d906f8dda73271a35ab3b058fb94?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e",
    "Q6 Sprayer": "https://example.com/q6-sprayer-image.jpg",
    "Q8S (Straight)": "https://example.com/q8s-straight-image.jpg",
  };

  return (
    <div className="flex flex-col items-start gap-5 mt-16 whitespace-nowrap max-md:mt-10">
      <label htmlFor="payloadDropdown" className="text-lg font-semibold">
        Payload
      </label>
      <div className="flex items-center gap-4 px-4 py-2 bg-white rounded-md border border-solid border-neutral-300 shadow-lg">
        <select
          id="payloadDropdown"
          className="appearance-none bg-transparent border-none text-sm focus:outline-none cursor-pointer"
          value={selectedPayload}
          onChange={(e) => setSelectedPayload(e.target.value)}
        >
          <option>Q4 Sprayer</option>
          <option>Q6 Sprayer</option>
          <option>Q8S (Straight)</option>
        </select>
      </div>
      <img
        loading="lazy"
        src={payloadImages[selectedPayload]}
        alt={selectedPayload}
        className="object-contain max-w-full h-auto rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
      />
    </div>
  );
};

export default PayloadDropdown;
