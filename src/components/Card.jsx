import React from "react";
import { useResults } from "../context/Results.c";
import { Plus,CircleMinus } from "lucide-react";

export const Card = () => {
  const { results, selected, setSelected } = useResults();
  const addPackage = (pkg) => {
    if (!selected.find((p) => p.name === pkg.name)) {
      setSelected([...selected, pkg]);
    }
  };
  const removePackage = (name) => {
    setSelected(selected.filter((p) => p.name !== name));
  };
  return (
    <>  {selected.length > 0 && (
        <div className=" flex items-center justify-start gap-3 my-6 flex-wrap ">

          {selected.map((pkg) => (
            <span key={pkg.name} className="flex justify-center items-center gap-3 sticky top-12 rounded-2xl border-white border-2 p-4  py-1 w-fit ">
              <div>{pkg.name}</div>
              <button
                onClick={() => removePackage(pkg.name)}
                className="text-red-600 cursor-pointer"
              >
                <CircleMinus size={20}  strokeWidth={2.5} />
              </button>
            </span>
          ))}
        </div>
      )}
      {results.length > 0 && (
        <div className="flex flex-wrap items-center justify-center">
          {results.map((pkg) => (
            <div
              key={pkg.name}
              className="flex justify-between border-b py-3  my-1 mx-2 bg-[#010101] p-4 w-2/3 rounded-2xl items-center"
            >
              <div>
                <strong className="font-bold text-2xl">{pkg.name}</strong>
                <span className="text-gray-500 m-3">v{pkg.version}</span>
                <div className="text-sm text-gray-600 my-4">
                  {pkg.description}
                </div>
              </div>
              <button
                onClick={() => addPackage(pkg)}
                className="bg-white size-12 text-pri px-2 rounded-full flex items-center justify-center cursor-pointer border border-white"
              >
                <Plus size={36} strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>
      )}

    </>
  );
};
