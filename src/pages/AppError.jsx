import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AppError = () => {
  const navigate = useNavigate();

  const backToMainHandler = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <h1>Error page 404</h1>
      <hr />
      <button onClick={backToMainHandler}>на главную</button>
    </>
  );
};
export default AppError;
