import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { debounce } from "lodash";
const HackerNewsButton = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMgs] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const fetchData = useRef(null);
  fetchData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      console.log("data: ", response.data.hits);
      setHits(response.data.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMgs(`The error: ${error}`);
      console.log("Error");
    }
  };

  //   const handlerUpdateQuery = debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 1000);
  const handleFetch = () => {
    if (!query.trim()) return; // tránh query rỗng
    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
  };

  // 👉 Lắng nghe phím Enter trong ô input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFetch();
    }
  };
  useEffect(() => {
    fetchData.current();
    console.log(url);
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex gap-x-2 mb-5">
        <input
          type="text"
          className="border border-gray-200 p-5  block w-full rounded-md transition-all focus:border-blue-400"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white font-semibold"
          onClick={handleFetch}
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className=" w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMsg && <p>{errorMsg}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((data, index) => {
            if (!data.title || data.title.length == 0) return null;
            return (
              <h3 key={index} className="p-3 bg-gray-100 rounded-md">
                {data.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsButton;
