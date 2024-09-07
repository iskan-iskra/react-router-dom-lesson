import { useNavigate } from "react-router-dom";
import { postList } from "../const";

const AppPostList = () => {
  const navigate = useNavigate();

  const postLinkHandler = (id) => () => navigate(`${id}`);

  return (
    <ul>
      {postList.map(({ id, title }) => (
        <li key={id}>
          <button onClick={postLinkHandler(id)}>{title}</button>
        </li>
      ))}
    </ul>
  );
};

export default AppPostList;
