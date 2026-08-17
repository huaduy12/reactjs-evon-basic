import { useGallery } from "./GalleryContext";

const GalleryPhotoList = () => {
  const { photos, cartItems } = useGallery();
  //   console.log(photos);
  console.log(cartItems);

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5">
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ info: { id, url, isFavorite } }) => {
  const { toggerFavorite, addToCart } = useGallery();
  const photo = { id, url, isFavorite };

  return (
    <div className="relative h-[300px] cursor-pointer group">
      <img src={url} alt="" className="w-full h-full object-cover" />
      <span
        className="absolute right-4 top-5 z-10 cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
        onClick={() => toggerFavorite(id)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={`${isFavorite ? "#ff1f68" : "#fff"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
        </svg>
      </span>
      <button
        className="py-3 px-6 bg-white font-sm rounded-lg text-black text-sm absolute
       bottom-5 left-2/4 -translate-x-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
        onClick={() => addToCart(photo)}
      >
        Add to card
      </button>
    </div>
  );
};
export default GalleryPhotoList;
