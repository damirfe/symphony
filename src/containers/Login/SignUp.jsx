import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/loginActions";
import { Link } from "react-router-dom";
import { LOADED, ERROR } from "../../constants/statusTypes";

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
  const signedUp = useSelector(state => state.loginReducer.signUp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  useEffect(() => {
    if (signedUp.status === LOADED) {
      history.push("/signin");
    }
    if (signedUp.status === ERROR) {
      alert("There was an error Signing you up"); // koristo bi toast umesto alerta
    }
  }, [history, signedUp.status]);

  const handleRegistration = event => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("passwords dont match");
    } else {
      dispatch(
        signUp({
          data: {
            username: email,
            password,
            first_name: "test",
            last_name: "hardcoded",
            email
          }
        })
      );
    }
  };

  const handleInput = event => {
    event.preventDefault();
    if (event.target.title === "email") {
      setEmail(event.target.value);
    }
    if (event.target.title === "password") {
      setPassword(event.target.value);
    }
    if (event.target.title === "confirmedPassword") {
      setConfirmedPassword(event.target.value);
    }
  };

  return (
    <div className="login-box">
      <h1>Sign Up</h1>
      <form onSubmit={event => handleRegistration(event)}>
        <label>Email</label>
        <input
          required
          autoComplete="username"
          title={"email"}
          value={email}
          onChange={handleInput}
          type="email"
        />
        <label>Password</label>
        <input
          required
          autoComplete="new-password"
          title={"password"}
          value={password}
          onChange={handleInput}
          type="password"
        />
        <label>Confirm</label>
        <input
          required
          autoComplete="new-password"
          title={"confirmedPassword"}
          value={confirmedPassword}
          onChange={handleInput}
          type="password"
        />

        <Link to="signin">Sign in</Link>
        <input value="Sign up" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
