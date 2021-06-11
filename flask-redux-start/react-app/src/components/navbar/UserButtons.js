import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../store/session";
import { Button } from "@chakra-ui/react"

import { useHistory } from "react-router-dom"

import UserDropdown from "./UserDropdown";


const UserButtons = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const history = useHistory()

  const onLogout = async (e) => {
    dispatch(logout());
    history.push("/")
  };

  return (
  <>
      {user ?
      <Button onClick={onLogout} className="navbar dropdown or logout btn">Logout</Button>
       :
       <UserDropdown /> }
  </>
  )
};

export default UserButtons;
