import React from "react";
import { useResults } from "../context/Results.c";

const ResultBar = () => {
    const { selected } = useResults();
    const installCommand = `npm install ${selected.map(p => p.name).join(" ")}`;

    const copyToClipboard = () => {
      navigator.clipboard.writeText(installCommand);
      alert("Copied!");
    };
  return (
    <>
      {" "}
      {selected.length > 0 && (
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm mb-2">Your install command:</p>
          <code className="block bg-white border p-2 rounded">
            {installCommand}
          </code>
          <button
            onClick={copyToClipboard}
            className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
          >
            Copy Command
          </button>
        </div>
      )}
    </>
  );
};

export default ResultBar;
