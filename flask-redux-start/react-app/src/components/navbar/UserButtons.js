import React from "react";
import {useSelector } from "react-redux";

import UserDropdown from "./UserDropdown";
import LoggedinInUserOptions from "./LoggedinInUserOptions"


const UserButtons = () => {

  const user = useSelector(state => state.session.user)

  return (
  <>
      {user ?
      <LoggedinInUserOptions />
       :
       <UserDropdown /> }
  </>
  )
};

export default UserButtons;
