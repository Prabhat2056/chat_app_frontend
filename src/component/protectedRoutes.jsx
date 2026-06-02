import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../apiCall/users";

const ProtectedRoutes = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const getLoggedInUser = async () => {
    let response = null;
    try {
      response = await getLoggedUser();
      if (response.success) {
        setUser(response.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLoggedInUser();
    } else {
      navigate("/login");
    }
  }, []);
  console.log(user);
  return (
    <div>
      <p>Name:{user?.firstName + " " + user?.lastName}</p>
      {children}
    </div>
  );
};

export default ProtectedRoutes;
