import React from 'react';
import UserButtons from './UserButtons';
import Logo from "./Logo"
import SearchBar from "../search/SearchBar"
import { Flex, Box } from "@chakra-ui/react";



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
          <SearchBar />
          <UserButtons />
      </Flex>
    </Flex>
    </Box>
  );
}

export default NavBar;
