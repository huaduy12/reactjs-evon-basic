import axios from "axios";
import React, { useEffect, useState } from "react";

// gọi api
const getPhotos = async (nextPage) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${nextPage}&limit=8`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Photos1 = () => {
  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handlerLoadMore = () => {
    const fetchPhotos = async () => {
      const data = await getPhotos(nextPage);
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setNextPage((nextPage) => nextPage + 1);
      console.log("Sau : " + nextPage);
    };
    fetchPhotos();
  };
  // mỗi lần set next page thì next page hiện tại là next page render của lần render trước được reactjs nhớ
  //   useEffect(() => {
  //     console.log("nextPage đã đổi thành:", nextPage);
  //   }, [nextPage]);
  useEffect(() => {
    handlerLoadMore();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.length > 0 &&
          photos.map((item) => (
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

export default Photos1;
