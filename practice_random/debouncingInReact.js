import React, { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
    const [inp, setInp] = useState("");
    const [data, setData] = useState([]);

    function search(inp) {
        let url = "https://api.tvmaze.com/search/shows?q=" + inp;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    function debounce(fn, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    }
    const debouncedSearch = useCallback(
        debounce((query) => search(query), 1500),
        []
    );

    React.useEffect(() => debouncedSearch(inp), [inp, debouncedSearch]);

    return (
        <div>
            <input
                value={inp}
                onChange={(e) => {
                    setInp(e.target.value);
                }}
            />
            {data.map((e, i) => (
                <div style={{ border: "1px solid blue" }}>
                    <p>{e.show.name}</p>
                    <p>{e.show.url}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
