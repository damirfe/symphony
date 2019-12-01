import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const logOut = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav className="navigation">
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div className="sign-out">
        <button onClick={() => logOut()}>Sign out</button>
      </div>
    </nav>
  );
};

export default Navigation;
