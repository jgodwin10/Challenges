import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setCredentials } from "../App/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  if (token) {
    const decode = jwtDecode(token);

    const expire = decode.exp;

    const now = Date.now() / 1000;

    if (expire < now) {
      const username = "";
      dispatch(setCredentials(""));

      return username;
    } else {
      const { username } = decode;

      return { username };
    }
  }

  const username = "";
  return username;
};

export default useAuth;
