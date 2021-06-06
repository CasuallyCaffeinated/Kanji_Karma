import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { Button } from "@chakra-ui/react"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return (
  <Button variant="link" onClick={onLogout}>Logout</Button>
  )
};

export default LogoutButton;
