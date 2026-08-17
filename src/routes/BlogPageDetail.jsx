import { useNavigate, useParams } from "react-router-dom";

const BlogPageDetail = () => {
  console.log(useParams());
  const { detailId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      Blog page Detail <span>{detailId}</span>
      <button onClick={() => navigate("/blog")}>Back to home</button>
    </div>
  );
};

export default BlogPageDetail;
