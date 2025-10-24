import React from "react";
import { useResults } from "../context/Results.c";
import { CircleMinus } from "lucide-react";
import toast from "react-hot-toast";
import { Files } from "lucide-react";

const ResultBar = () => {
    const {  selected, setSelected } = useResults();;
    const installCommand = `npm install ${selected.map(p => p.name).join(" ")}`;

    const copyToClipboard = () => {
      navigator.clipboard.writeText(installCommand);
      toast.success("Copied to clipboard!");
    };

  const removePackage = (name) => {
    setSelected(selected.filter((p) => p.name !== name));
  };
  return (
    <>
       {selected.length > 0 && (
        <div className=" flex items-center justify-start gap-3 my-6 flex-wrap lg:sticky lg:top-10 ">
          {selected.map((pkg) => (
            <span
              key={pkg.name}
              className="flex justify-center items-center gap-3  rounded-2xl border-white border-2 p-4  py-1 w-fit "
            >
              <div>{pkg.name}</div>
              <button
                onClick={() => removePackage(pkg.name)}
                className="text-red-600 cursor-pointer"
              >
                <CircleMinus size={20} strokeWidth={2.5} />
              </button>
            </span>
          ))}
        </div>
      )}
      {selected.length > 0 && (
        <div className="bg-bg p-3 rounded w-full  ">
          <p className="text-sm mb-2">Your install command:</p>
          <code className="block bg-[#16171b] border p-2 rounded">
            {installCommand}
          </code>
          <button
            onClick={copyToClipboard}
            className="mt-2 bg-pri text-white px-3 py-1 rounded flex items-center gap-2"
          >
            Copy <Files />
          </button>
        </div>
      )}
    </>
  );
};

export default ResultBar;
