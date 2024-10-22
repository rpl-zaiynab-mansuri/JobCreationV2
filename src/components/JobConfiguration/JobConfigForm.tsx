
import React from "react";

const JobConfigForm: React.FC = () => {
  return (
    <form className="flex flex-col items-start mt-2 text-black space-y-5">
    <div className="flex items-center space-x-4">
      <label htmlFor="jobName" className="w-40 text-right">
        Job Name
      </label>
      <input
        id="jobName"
        type="text"
        className="px-3 py-2 rounded-md border border-neutral-300 flex-1"
        defaultValue="Job 1"
      />
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="jobDetails" className="w-40 text-right">
        Job Details
      </label>
      <textarea
        id="jobDetails"
        className="px-3 py-2 rounded-md border border-neutral-300 flex-1"
        rows={2}
      ></textarea>
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="workOrder" className="w-40 text-right">
        Work Order
      </label>
      <input
        id="workOrder"
        type="text"
        className="px-3 py-2 rounded-md border border-neutral-300 flex-1"
        defaultValue="2"
      />
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="aggitationRate" className="w-40 text-right">
        Aggitation Rate
      </label>
      <select
        id="aggitationRate"
        className="px-3 py-2 w-48 rounded-md border border-neutral-300"
      >
        <option>LOW</option>
        <option>MEDIUM</option>
        <option>HIGH</option>
      </select>
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="velocityLimit" className="w-40 text-right">
        Velocity Limit
      </label>
      <div className="flex gap-2">
        <input
          id="velocityLimit"
          type="text"
          className="px-3 py-2 rounded-md border border-neutral-300"
          defaultValue="5"
        />
        <span className="self-center">km/h</span>
      </div>
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="averageRowWidth" className="w-40 text-right">
        Average Row Width
      </label>
      <div className="flex gap-2">
        <input
          id="averageRowWidth"
          type="text"
          className="px-3 py-2 rounded-md border border-neutral-300"
          defaultValue="2.4"
        />
        <span className="self-center">m</span>
      </div>
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="plannedStartDate" className="w-40 text-right">
        Planned Start Date
      </label>
      <div className="flex gap-2 items-center px-2.5 py-1.5 w-48 rounded-md border border-neutral-300">
        <input
          id="plannedStartDate"
          type="date"
          className="bg-transparent flex-1"
          defaultValue="2024-09-07"
        />
      </div>
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="maxAmbientTemp" className="w-40 text-right">
        Max Ambient Temperature
      </label>
      <div className="flex gap-2">
        <input
          id="maxAmbientTemp"
          type="text"
          className="px-3 py-2 rounded-md border border-neutral-300"
          defaultValue="45"
        />
        <span className="self-center">C</span>
      </div>
    </div>
  
    <div className="flex items-center space-x-4">
      <label htmlFor="maxWindSpeed" className="w-40 text-right">
        Max Wind Speed
      </label>
      <div className="flex gap-2">
        <input
          id="maxWindSpeed"
          type="text"
          className="px-3 py-2 rounded-md border border-neutral-300"
          defaultValue="10"
        />
        <span className="self-center">km/h</span>
      </div>
    </div>
  </form>
  
  );
};

export default JobConfigForm;
