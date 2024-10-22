import React, { useState } from "react";

interface BlockItem {
  label: string;
  id: number; // Added id for better key management
}

const BlockList: React.FC = () => {
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null);

  const blocks: BlockItem[] = [
    { label: "Block A", id: 1 },
    { label: "Block B", id: 2 },
    { label: "Block C", id: 3 },
    { label: "Block D", id: 4 },
    { label: "Block E", id: 5 },
  ];

  const handleBlockClick = (id: number) => {
    setSelectedBlockId(id);
  };

  return (
    <div className="flex flex-col w-full text-sm leading-loose text-black max-md:mt-9">
      <div className="flex flex-col ml-9 bg-black bg-opacity-0 w-[73px] max-md:ml-2.5">
        {blocks.map((block) => (
          <div
            key={block.id} // Use id as the key
            className={`flex gap-1.5 ${
              block.id > 1 ? "mt-3" : ""
            } bg-black bg-opacity-0 cursor-pointer`} // Added cursor-pointer for better UX
            onClick={() => handleBlockClick(block.id)} // Handle click event
          >
            <div
              className={`flex shrink-0 my-auto w-4 h-4 ${
                selectedBlockId === block.id ? "bg-black" : "bg-white"
              } rounded border border-solid border-zinc-400`}
            />
            <div>{block.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockList;
