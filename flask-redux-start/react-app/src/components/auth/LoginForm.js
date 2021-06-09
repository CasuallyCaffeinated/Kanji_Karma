import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

import { Box, Button, Input, FormLabel, FormControl } from "@chakra-ui/react"

import "./auth.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  if (user) {
    return <Redirect to={`/profile/${user.id}`} />;
  }

  return (
    <form onSubmit={onLogin}>
      <Box>
        <FormControl isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        </FormControl>
      </Box>
      <Box>
        <FormControl isRequired>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        </FormControl>
        <Button type="submit" colorScheme="purple"
        marginY="15px"
        >Login</Button>
        <Box
        color="red.600"
        >
        {errors.map((error) => (
          <Box>{error}</Box>
        ))}
      </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
