import { useAuth } from "./AuthContext";
import { useGallery } from "./GalleryContext";

const Header = () => {
  const { user, setUser } = useAuth();
  const { cartItems, photos } = useGallery();
  // console.log(user);
  const countCartItem = cartItems.length;
  const countFavorite = photos.filter((item) => item.isFavorite).length;

  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user?.avatar}
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
          <span className="text-sm font-medium">
            Welcome back <strong>{user?.name}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <div className="ml-auto mr-5 flex items-center gap-5">
        <IconWithCount count={countCartItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </IconWithCount>
        <IconWithCount count={countFavorite}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="black"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </IconWithCount>
      </div>
      <button
        className="p-2 rounded-md bg-gray-300 text-black ml-auto"
        onClick={() => setUser(null)}
      >
        Sign out
      </button>
    </div>
  );
};

function IconWithCount({ count, children }) {
  return (
    <div className="relative inline-flex">
      {children}

      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-500 px-1 text-xs font-medium text-white">
          {count}
        </span>
      )}
    </div>
  );
}

export default Header;
