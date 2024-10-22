import React, { useState } from "react";
import JobConfigHeader from "./JobConfigHeader";
import JobConfigForm from "./JobConfigForm";
import FanConfigTable from "./FanConfigTable";

const JobConfiguration: React.FC = () => {
  const [activeMode, setActiveMode] = useState<string>("even"); // Default to "even"

  const handleChangeMode = (mode: string) => {
    setActiveMode(mode);
  };

  return (
    <section className="flex flex-col px-16 pt-5 pb-20 mt-4 w-full bg-white max-md:px-5 max-md:max-w-full">
      <JobConfigHeader activeMode={activeMode} onChangeMode={handleChangeMode} />

      <div className="flex gap-5 justify-around mt-5 text-sm leading-loose max-md:max-w-full">
        <JobConfigForm />
        <FanConfigTable mode={activeMode} />
      </div>

      <button className="overflow-hidden self-end px-3.5 py-2 mt-32 mr-6 text-white bg-red-600 rounded-md border border-solid border-black border-opacity-0 max-md:mt-10 max-md:mr-2.5">
        Create Job
      </button>
    </section>
  );
};

export default JobConfiguration;
