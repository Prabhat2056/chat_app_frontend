

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../apiCall/users";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../features/loaderSlice";
import { setUser } from "../features/userSlice";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user); // ← Fixed this line
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    let response = null;
    try {
      dispatch(showLoader());
      response = await getLoggedUser();
      dispatch(hideLoader());
      console.log(response);
      if (response.success) {
        dispatch(setUser(response.data));
  console.log(user);

      } else {
        navigate("/login");
  console.log(user);

      }
    } catch (error) {
      dispatch(hideLoader());
      navigate("/login");
  console.log(user);

    }
  };
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLoggedInUser();
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoutes;