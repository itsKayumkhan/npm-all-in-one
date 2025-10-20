import React from "react";
import SearchBar from "./components/SearchBar";
import { Card } from "./components/Card";
import ResultBar from "./components/ResultBar";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="p-6 font-sans bg-bg min-h-screen text-white font-poppins">
     <NavBar/>

      <SearchBar />
      <h2 className="font-semibold mb-2">Search Results:</h2>
      <Card />
      <ResultBar />
    </div>
  );
}
