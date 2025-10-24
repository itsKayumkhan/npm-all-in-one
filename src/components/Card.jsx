import React from "react";
import { useResults } from "../context/Results.c";
import { Plus, CircleMinus } from "lucide-react";
import { Minus } from "lucide-react";

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
    <>
      {" "}
      {results.length > 0 && (
        <div className="flex flex-wrap items-center justify-center overflow-y-auto hide-scrollbar h-full   left w-full   lg:w-[70%]">
          {results.map((pkg) => (
            <div
              key={pkg.name}
              className="flex justify-between border-b py-3  my-1 mx-2 bg-sec p-4 w-full lg:w-2/3 rounded-2xl items-center "
            >
              <div>
                <strong className="font-bold text-2xl">{pkg.name}</strong>
                <span className="text-gray-500 m-3">v{pkg.version}</span>
                <div className="text-sm text-gray-200 my-4 line-clamp-1">
                  {pkg.description}
                </div>
              </div>
              <button className="bg-pri size-12 text-white px-2 rounded-full flex items-center justify-center cursor-pointer border border-white">
                {selected.includes(pkg) ? (
                  <Minus size={20} strokeWidth={2.5}
                    onClick={() => removePackage(pkg.name)}/>
                ) : (
                  <Plus
                    size={36}
                    strokeWidth={2.5}
                    onClick={() => addPackage(pkg)}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
