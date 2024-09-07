import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postById } from "../const";

const AppPost = () => {
  const { postId } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({});

  useEffect(() => {
    const data = postById(postId);
    if (data) {
      setPost(data);
    } else {
      throw new Error("post not found");
    }
  }, [postId, setPost]);

  const returnPageHandler = () => navigate(-1);

  return (
    <>
      <button onClick={returnPageHandler}>назад</button>
      <hr />
      <div>
        <div>title: {post.title}</div>
        <div>description: {post.description}</div>
      </div>
    </>
  );
};

export default AppPost;
