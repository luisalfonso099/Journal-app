import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import { onAuthStateChanged, auth } from "../firebase/firebase-config";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";
const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);
  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
