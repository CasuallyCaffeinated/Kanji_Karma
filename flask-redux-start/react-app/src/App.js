import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";

// COMPONENT IMPORTS
import NavBar from "./components/navbar/NavBar";
import Splashpage from "./components/homepage/Splashpage"
import Footer from "./components/Footer"
import SignUpPage from "./components/auth/SignUpPage"
import LoginPage from "./components/auth/LoginPage"
import UserProfile from "./components/profile/UserProfile"
import CharacterInventory from "./components/profile/CharacterInventory"
import DecksPage from "./components/profile/DecksPage"
import EnglishSearchResult from "./components/search/EnglishSearchResult"

function App() {

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
              <SignUpPage />
          </Route>
          <Route path="/login">
              <LoginPage />
          </Route>
          <Route path="/profile/:id">
              <UserProfile />
          </Route>
          <Route path="/me/:id/inventory">
            <CharacterInventory />
          </Route>
          <Route path="/me/:id/decks">
              <DecksPage />
          </Route>
          <Route path="/search/:query">
            <EnglishSearchResult />
          </Route>
          {/* <Route path="/"> */}
              {/* <Error404 /> */}
          {/* </Route> */}
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
