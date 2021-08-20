import React from 'react';
import UserButtons from './UserButtons';
import Logo from "./Logo"
import SearchBar from "../search/SearchBar"
import { Flex, Box } from "@chakra-ui/react";
// import DiscoverJapanese from "./DiscoverJapanese" //? To be implemented


import "./navbar.css";

const NavBar = () => {
  return (
    <Box h="60px" w="100%">
    <Flex h="60px"
    w="100%"
    className="main-nav"
    >
      <Flex align="center" justify="space-around" w="100%">
          <Logo />
          {/* <DiscoverJapanese /> */}
          <SearchBar />
          <UserButtons />
      </Flex>
    </Flex>
    </Box>
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
