import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7gc_JvtLqPfNhxrkgMCpKSKyVTdmO_1kh5seajiJUg&s=10",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM7NnRiFPDPyCQ0a_L2PP9DdstoM28zfv3O8cQ3n7gA&s=10",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSC8ohiSBIW1ZSsNW0QovAshH9qX5BKxYW-MjDRs5vA&s=10",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBH3KBSB3wXWqadMoGP_F4PbJUVgI3ysW_KZJ7cDPUg&s=10",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4jX3WQ8aDje1UHg9MsK_B4TZH0Q3GsYIcK-v_gogsQ&s=10",
    isFavorite: false,
  },
];

const GalleryContext = createContext();

function GalleryProvider(props) {
  // const [localStorageValue, setLocalStorageStateValue] = useLocalStorage(
  //   "photos",
  //   fakeData,
  // );
  const [cartStorageValue, setCartStorageStateValue] = useLocalStorage(
    "cartItems",
    [],
  );
  const [photos, setPhotos] = useLocalStorage("photos", fakeData);
  const [cartItems, setCartItems] = useState(cartStorageValue);
  const [favoriteList, setFavoriteList] = useState([]);

  // function toggerFavorite(photoId) {
  //   const updateArray = photos.map((item) => {
  //     if (item.id === photoId) {
  //       return { ...item, isFavorite: !item.isFavorite };
  //     }
  //     return item;
  //   });
  //   setPhotos(updateArray);
  //   setLocalStorageStateValue(updateArray);
  // }
  function toggerFavorite(photoId) {
    const updateArray = photos.map((item) => {
      if (item.id === photoId) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setPhotos(updateArray);
  }

  function addToCart(newItem) {
    const isExist = cartItems.some((item) => item.id === newItem.id);
    if (!isExist) {
      setCartItems((prev) => {
        setCartStorageStateValue([...prev, newItem]);
        return [...prev, newItem];
      });
    }
  }
  function deleteToCard(id) {
    setCartItems((prev) => {
      const cartUpdate = prev.filter((item) => item.id !== id);
      setCartStorageStateValue(cartUpdate);
      return cartUpdate;
    });
  }
  const value = {
    photos,
    cartItems,
    favoriteList,
    setCartItems,
    setFavoriteList,
    setPhotos,
    toggerFavorite,
    addToCart,
    deleteToCard,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined") {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}
export { useGallery, GalleryProvider };
