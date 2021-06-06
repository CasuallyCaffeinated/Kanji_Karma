import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../store/session";
import { Button } from "@chakra-ui/react"

import UserDropdown from "./UserDropdown";


const UserButtons = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const onLogout = async (e) => {
    dispatch(logout());
  };

  return (
  <>
      {user ?
      <Button variant="link" onClick={onLogout}>Logout</Button>
       :
       <UserDropdown /> }
  </>
  )
};

export default UserButtons;
