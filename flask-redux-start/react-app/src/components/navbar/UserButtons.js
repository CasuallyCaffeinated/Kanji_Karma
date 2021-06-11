import React from "react";
import {useSelector } from "react-redux";
// import { logout } from "../../store/session";

// import { useHistory } from "react-router-dom"

import UserDropdown from "./UserDropdown";
import LoggedinInUserOptions from "./LoggedinInUserOptions"


const UserButtons = () => {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  // const history = useHistory()

  // const onLogout = async (e) => {
  //   dispatch(logout());
  //   history.push("/")
  // };

  return (
  <>
      {user ?
      // <Button onClick={onLogout} className="navbar dropdown or logout btn">Logout</Button>
      <LoggedinInUserOptions />
       :
       <UserDropdown /> }
  </>
  )
};

export default UserButtons;
