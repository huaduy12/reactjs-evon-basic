import { NavLink } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
];

const Navigation = () => {
  return (
    <div className="p-5 bg-white shadow-md flex item-center justify-center gap-x-5">
      {ListLink.map((item) => {
        return (
          <NavLink
            to={item.to}
            key={item.id}
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : ""
            }
          >
            {item.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navigation;
