import { createContext, useContext, useState } from "react";

const ResultsContext = createContext();

const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);
    return (
        <ResultsContext.Provider value={{ results, setResults, selected, setSelected }}>
            {children}
        </ResultsContext.Provider>
    );
};

const useResults = () => useContext(ResultsContext);
export { ResultProvider, useResults };
