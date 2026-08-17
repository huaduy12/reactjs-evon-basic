import { useGallery } from "./GalleryContext";

const GalleryCartList = () => {
  const { cartItems, deleteToCard } = useGallery();
  return (
    <div className="py-10 px-5 flex flex-col gap-5 items-start">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            className="inline-flex gap-x-5 justify-between items-center mb-3"
            key={item.id}
          >
            <img
              src={item.url}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              className="p-3 rounded-lg bg-red-400 text-white font-semibold text-sm"
              onClick={() => deleteToCard(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default GalleryCartList;
