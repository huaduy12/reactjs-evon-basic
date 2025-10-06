import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";
// import { debounce } from "lodash";

const initState = {
  hits: [],
  query: "",
  loading: true,
  errorMsg: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const HackerNewsReducer = () => {
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [errorMsg, setErrorMgs] = useState("");
  //   const [url, setUrl] = useState(
  //     `https://hn.algolia.com/api/v1/search?query=${query}`
  //   );
  const fetchData = useRef(null);

  const hackerNewsReducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA": {
        return { ...state, hits: action.payload };
      }
      case "LOADING": {
        return { ...state, loading: action.payload };
      }
      case "ERR_MSG": {
        return { ...state, errorMsg: action.payload };
      }
      case "SET_URL": {
        return { ...state, url: action.payload };
      }
      case "SET_QUERY": {
        return { ...state, query: action.payload };
      }
    }
  };
  const [state, dispatch] = useReducer(hackerNewsReducer, initState);
  fetchData.current = async () => {
    try {
      dispatch({
        type: "LOADING",
        payload: true,
      });
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data.hits || [],
      });
      dispatch({
        type: "LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "LOADING",
        payload: false,
      });
      dispatch({
        type: "ERR_MSG",
        payload: `The error: ${error}`,
      });
    }
  };

  //   const handlerUpdateQuery = debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 1000);
  const handleFetch = () => {
    if (!state.query.trim()) return; // tránh query rỗng
    dispatch({
      type: "SET_URL",
      payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
    });
  };

  // 👉 Lắng nghe phím Enter trong ô input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFetch();
    }
  };
  useEffect(() => {
    fetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex gap-x-2 mb-5">
        <input
          type="text"
          className="border border-gray-200 p-5  block w-full rounded-md transition-all focus:border-blue-400"
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white font-semibold"
          onClick={handleFetch}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className=" w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMsg && <p>{state.errorMsg}</p>}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((data, index) => {
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

export default HackerNewsReducer;
