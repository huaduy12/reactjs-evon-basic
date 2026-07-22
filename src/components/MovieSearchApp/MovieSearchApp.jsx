import axios from "axios";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const MovieSearchApp = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWIxM2QxZWE4Y2Q3OTMyNDY0OTBhMjlkNzYzYzI3MSIsIm5iZiI6MTc2NzQ1Mjg0NC41OCwic3ViIjoiNjk1OTMwYWNkYWJhMWRjZTJmM2JkZDljIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.39MnynRTFBQ1gE3ogJewoujv8-4YgIOlPkkMgRxUNIM";
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("jack");
  const [loading, setLoading] = useState(true);

  const handlerUpdateQuery = debounce((e) => {
    setKeyword(e.target.value);
  }, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            query: keyword === "" ? "jack" : keyword,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.results) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [keyword]);

  return (
    <div className="p-10 w-full">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500"
          placeholder="Search Movie ...."
          onChange={handlerUpdateQuery}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieLoadingSkeleton></MovieLoadingSkeleton>
          <MovieLoadingSkeleton></MovieLoadingSkeleton>
          <MovieLoadingSkeleton></MovieLoadingSkeleton>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm border border-grey flex flex-col">
      <div className="h-[297px]">
        <img
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="p-7 flex-1 flex flex-col ">
        <h3 className="text-lg text-black font-semibold mb-4">{data.title}</h3>
        <p className="text-[#999] text-sm mb-6">{data.overview}</p>
        <div className="flex items-center gap-x-3 mt-auto">
          <svg
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z" />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieLoadingSkeleton = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm border border-grey flex flex-col">
      <div className="h-[297px]">
        <LoadingSkeleton height="297px" radius="16px"></LoadingSkeleton>
      </div>
      <div className="p-7 flex-1 flex flex-col ">
        <h3 className="text-lg text-black font-semibold mb-4">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <p className="text-[#999] text-sm mb-6">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-2"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-2"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </p>
        <div className="flex items-center gap-x-3 mt-auto">
          <svg
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z" />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton height="10px" width="30px"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MovieSearchApp;
