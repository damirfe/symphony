import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/loginActions";
import { LOADED, ERROR } from "../../constants/statusTypes";

const SignIn = ({ history }) => {
  const signedIn = useSelector(state => state.loginReducer.signedIn);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (signedIn.status === LOADED) {
      history.push("/dashboard");
    }
    if (signedIn.status === ERROR) {
      alert("There was an error Signing you in");
    }
  }, [history, signedIn.status]);

  const handleSignIn = event => {
    event.preventDefault();
    dispatch(signIn({ data: { username: email, password: password } }));
  };

  const handleInput = event => {
    event.preventDefault();
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="login-box">
      <h1>Sign in</h1>
      <form onSubmit={event => handleSignIn(event)}>
        <label>Email</label>
        <input
          required
          name="email"
          autoComplete="username"
          value={email}
          onChange={handleInput}
          type="email"
        />
        <label>Password</label>
        <input
          required
          name="password"
          autoComplete="new-password"
          value={password}
          onChange={handleInput}
          type="password"
        />

        <input value="Sign in" type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
