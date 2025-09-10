import React, { useEffect, useState } from "react";
import axios from "axios";

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handlerLoadMore = async () => {
    const photos = await getPhotos(nextPage);

    const newPhotos = [...randomPhotos, ...photos];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handlerLoadMore();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handlerLoadMore}
          className="inline-block px-8 py-8 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
