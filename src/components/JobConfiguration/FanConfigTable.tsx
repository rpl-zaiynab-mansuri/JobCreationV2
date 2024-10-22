import React from "react";

interface FanConfigTableProps {
  mode: string;
}

interface FanConfig {
  fanNumber: number;
  speed: number;
  applicationRate: number;
}

const FanConfigTable: React.FC<FanConfigTableProps> = ({ mode }) => {
  const fanConfigs: FanConfig[] = [
    { fanNumber: 1, speed: 2000, applicationRate: 55 },
    { fanNumber: 2, speed: 2000, applicationRate: 31 },
    { fanNumber: 3, speed: 2000, applicationRate: 20 },
    { fanNumber: 4, speed: 2000, applicationRate: 64 },
  ];

  const renderFanSpeedInput = (fan: FanConfig) => {
    const isDisabled = mode === "even" && fan.fanNumber !== 1;

    return (
      <input
        type="number"
        className="w-full px-2 py-1 border rounded"
        value={mode === "even" ? fanConfigs[0].speed : fan.speed}
        disabled={isDisabled} // Disable for fans 2, 3, 4 in "even" mode
        onChange={() => {}}
      />
    );
  };

  const renderApplicationRateInput = (fan: FanConfig) => {
    const isDisabled = mode === "even" && fan.fanNumber !== 1;

    return (
      <input
        type="number"
        className="w-full px-2 py-1 border rounded"
        value={mode === "even" ? fanConfigs[0].applicationRate : fan.applicationRate}
        disabled={isDisabled} // Disable for fans 2, 3, 4 in "even" mode
        onChange={() => {}}
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
              <td className="px-4 py-6">{renderFanSpeedInput(fan)}</td>
              <td className="px-4 py-6">{renderApplicationRateInput(fan)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FanConfigTable;
