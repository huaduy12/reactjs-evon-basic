import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMgs] = useState("");
  const fetchData = useRef(null);
  fetchData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
      );
      console.log("data: ", response.data.hits);
      setHits(response.data.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMgs(`The error: ${error}`);
      console.log("Error");
    }
  };

  const handlerUpdateQuery = debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => {
    fetchData.current();
  }, [query]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 p-5 m-5 block w-full rounded-md mb-5 transition-all focus:border-blue-400"
        defaultValue={query}
        onChange={handlerUpdateQuery}
      />
      {loading && (
        <div className=" w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMsg && <p>{errorMsg}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((data, index) => (
            <h3 key={index} className="p-3 bg-gray-100 rounded-md">
              {data.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
