import axios from "axios";
import React, { useState } from "react";
import { useResults } from "../context/Results.c";
import { Search } from "lucide-react";

const SearchBar = () => {
  const { setResults } = useResults();
  const [query, setQuery] = useState("");

  const searchPackages = async () => {
    if (!query.trim()) return;
    const res = await axios.get(
      `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(
        query
      )}&size=10`
    );
    setResults(res.data.objects.map((o) => o.package));
  };

  return (
    <>
      <div className=" gap-2 mb-4 flex items-center justify-center my-10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchPackages()}
          placeholder="Search npm packages..."
          className="border-2 p-4  rounded-4xl w-1/2 text-3xl text-pri"
        />
        <button
          onClick={searchPackages}
          className="bg-pri text-sec size-14 flex items-center justify-center rounded-full border border-white cursor-pointer"
        >
          <Search size={36} strokeWidth={2.5} />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
