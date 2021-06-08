import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";

// COMPONENT IMPORTS
import NavBar from "./components/navbar/NavBar";
import Splashpage from "./components/homepage/Splashpage"
import Footer from "./components/Footer"
import TestSignUpPage from "./components/auth/TestSignUpPage"
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
          <Route path="/" exact={true}>
            <Splashpage />
          </Route>
          <Route path="/sign-up">
              <TestSignUpPage />
          </Route>
          <Route path="/">
              {/* <Error404 /> */} //! TO BE MADE
          </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


// <Route path="/login" exact={true}>
  //   <LoginForm />
  // </Route>
  // <Route path="/sign-up" exact={true}>
  //   <SignUpForm />
  // </Route>
  // <ProtectedRoute path="/users" exact={true} >
  //   <UsersList/>
  // </ProtectedRoute>
  // <ProtectedRoute path="/users/:userId" exact={true} >
  //   <User />
  // </ProtectedRoute>
  // <ProtectedRoute path="/" exact={true} >
  //   <h1>My Home Page</h1>
  // </ProtectedRoute>
