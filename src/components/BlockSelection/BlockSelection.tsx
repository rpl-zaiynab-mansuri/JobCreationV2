import React from "react";
import Map from "./Map";
import BlockList from "./BlockList";
import PayloadDropdown from "./PayloadDropdown";

const BlockSelection: React.FC = () => {
  return (
    
    <section className="flex flex-col px-20 pb-16 mt-3 w-full bg-white max-md:px-5 max-md:max-w-full">
      <h2 className="text-2xl text-black ml-3.5">Block Selection</h2>
      <p className="text-sm leading-loose text-black ml-3.5 mt-2">
        Select target blocks from the map or panel
      </p>
      <div className="mt-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Map />
          <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
            <BlockList />
            <PayloadDropdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockSelection;
