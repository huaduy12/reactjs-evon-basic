import { useSearchParams } from "react-router-dom";

const ProfilePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const category = searchParams.get("category");

  console.log(page); // "2"
  console.log(category); // "java"
  const nextPage = () => {
    setSearchParams({
      page: String(page + 1),
    });
  };
  return (
    <div>
      Profile page
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default ProfilePage;
