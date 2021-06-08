import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

import { Box, Button, Input, FormLabel, FormControl } from "@chakra-ui/react"

import "./auth.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const history = useHistory()

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(signUp(name, username, email, password))
    }
  };

  if (user) {
    history.push(`/profile/${user.id}`)
  }

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };



  return (
    <form onSubmit={onSignUp}>
      <Box>
        <FormLabel className="form label" >
          Name
        </FormLabel>
        </Box>
        <Box>
        <Input
        type="text"
        name="name"
        onChange={updateName}
        className="form input"
        value={name}
        ></Input>
        </Box>

        <FormControl isRequired>
        <Box>
        <FormLabel className="form label">User Name</FormLabel>
        </Box>
        <Box>
        <Input
          type="text"
          name="username"
          onChange={updateUsername}
          className="form input"
          value={username}
        ></Input>
      </Box>
        </FormControl>

        <FormControl isRequired>
      <Box>
        <FormLabel className="form label" >Email</FormLabel>
        </Box>
        <Box>
        <Input
          type="text"
          name="email"
          onChange={updateEmail}
          className="form input"
          value={email}
        ></Input>
      </Box>
      </FormControl>

      <FormControl isRequired>
      <Box>
        <FormLabel className="form label" >Password</FormLabel>
        </Box>
        <Box>
        <Input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          className="form input"
        ></Input>
      </Box>
      </FormControl>

      <FormControl isRequired>
      <Box>
        <FormLabel className="form label" >Repeat Password</FormLabel>
        </Box>
        <Box>
        <Input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="form input"
        ></Input>
      </Box>
      </FormControl>

      <Box
      marginY="10px"
      >
      <Button type="submit" colorScheme="purple">Sign Up</Button>
      </Box>
    </form>
  );
};

export default SignUpForm;
