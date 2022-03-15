import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../../actions/ui";
import { startRegiterEmailPasswordName } from "../../actions/auth";

const RegisterScreeen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegiterEmailPasswordName(email, password, name));
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length <= 5) {
      dispatch(setError("password must be at least 5 characters"));
      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <div className="animate__animated animate__fadeIn">
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister} >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          autoComplete="off"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="mb-5 btn btn-primary btn-block" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already Registered ?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreeen;
