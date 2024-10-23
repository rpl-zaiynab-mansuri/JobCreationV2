import React, { useState } from "react";

interface FanConfigTableProps {
  mode: string;
}

interface FanConfig {
  fanNumber: number;
  speed: number;
  applicationRate: number;
}

const FanConfigTable: React.FC<FanConfigTableProps> = ({ mode }) => {
  // Initialize state for fanConfigs
  const [fanConfigs, setFanConfigs] = useState<FanConfig[]>([
    { fanNumber: 1, speed: 2000, applicationRate: 55 },
    { fanNumber: 2, speed: 2000, applicationRate: 31 },
    { fanNumber: 3, speed: 2000, applicationRate: 20 },
    { fanNumber: 4, speed: 2000, applicationRate: 64 },
  ]);

  // Handle Fan Speed change
  const handleSpeedChange = (index: number, value: number) => {
    const updatedFans = [...fanConfigs];
    updatedFans[index].speed = value;
    setFanConfigs(updatedFans); // Update state
  };

  // Handle Application Rate change
  const handleApplicationRateChange = (index: number, value: number) => {
    const updatedFans = [...fanConfigs];
    updatedFans[index].applicationRate = value;
    setFanConfigs(updatedFans); // Update state
  };

  const renderFanSpeedInput = (fan: FanConfig, index: number) => {
    const isDisabled = mode === "even" && fan.fanNumber !== 1;

    return (
      <input
        type="number"
        className="w-full px-2 py-1 border rounded"
        value={mode === "even" ? fanConfigs[0].speed : fan.speed}
        disabled={isDisabled}
        onChange={(e) => handleSpeedChange(index, parseInt(e.target.value))} // Update speed on change
      />
    );
  };

  const renderApplicationRateInput = (fan: FanConfig, index: number) => {
    const isDisabled = mode === "even" && fan.fanNumber !== 1;

    return (
      <input
        type="number"
        className="w-full px-2 py-1 border rounded"
        value={mode === "even" ? fanConfigs[0].applicationRate : fan.applicationRate}
        disabled={isDisabled}
        onChange={(e) => handleApplicationRateChange(index, parseInt(e.target.value))} // Update application rate on change
      />
    );
  };

  return (
    <div className="flex flex-col max-md:max-w-full">
      <table className="w-full text-black border-collapse border border-solid border-zinc-200 rounded-md">
        <thead className="bg-gray-50">
          <tr className="font-semibold leading-6 text-zinc-400">
            <th className="px-4 py-6 border-b border-zinc-200"></th>
            <th className="px-4 py-6 border-b border-zinc-200">Fan Speed (rpm)</th>
            <th className="px-4 py-6 border-b border-zinc-200">Application Rate (L/Ha)</th>
          </tr>
        </thead>
        <tbody>
          {fanConfigs.map((fan, index) => (
            <tr
              key={fan.fanNumber}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-6">Fan {fan.fanNumber}</td>
              <td className="px-4 py-6">{renderFanSpeedInput(fan, index)}</td>
              <td className="px-4 py-6">{renderApplicationRateInput(fan, index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FanConfigTable;
