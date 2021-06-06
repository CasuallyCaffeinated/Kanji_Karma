import React from 'react';
import LogoutButton from '../auth/LogoutButton';
import Logo from "../navbar/Logo"
import { Flex, Button, Box } from "@chakra-ui/react";

import "./navbar.css";

const NavBar = () => {
  return (
    <Flex h="60px"
    w="100%"
    className="main-nav">
      <Flex align="center" justify="space-around" w="100%">
          <Logo />
          <LogoutButton />
      </Flex>
    </Flex>

  );
}

export default NavBar;

//  <nav>
//       <ul>
//         <li>
//           <NavLink to="/" exact={true} activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" exact={true} activeClassName="active">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/sign-up" exact={true} activeClassName="active">
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/users" exact={true} activeClassName="active">
//             Users
//           </NavLink>
//         </li>
//         <li>

//         </li>
//       </ul>
//     </nav>
