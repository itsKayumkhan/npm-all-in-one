import React from "react";
import SearchBar from "./components/SearchBar";
import { Card } from "./components/Card";
import ResultBar from "./components/ResultBar";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="h-screen  ">
        <div className="search">
          <SearchBar />
        </div>
        <div className="main flex flex-col lg:flex-row  container justify-around  items-start   ">
          <Card />
          <div className="right lg:w-[30%] w-full sticky top-10 mx-4">
            <ResultBar />
          </div>
        </div>
      </div>
    </>
  );
}
