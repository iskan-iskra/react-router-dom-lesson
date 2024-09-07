import { useRouteError } from "react-router-dom";

const AppPostError = () => {
  const myError = useRouteError();

  console.log(myError);

  return (
    <>
      <div>пост не найден</div>
    </>
  );
};

export default AppPostError;
