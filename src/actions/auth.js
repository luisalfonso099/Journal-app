import {
  auth,
  signInWithPopup,
  googleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "../firebase/firebase-config";
import { types } from "../types/types";
import { startLoading, finishLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(finishLoading());
        Swal.fire("Error", error.code, "error");
      });
  };
};

export const startRegiterEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        Swal.fire("Error", error.code, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
