import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import authContext from "../store/auth-context";

const MainHeader = (props) => {
  return (
    <authContext.Consumer>
      {(ctx) => {
        return (
          <header className={classes["main-header"]}>
            <h1>A Typical Page</h1>
            <Navigation
              isLoggedIn={ctx.isAuthenticated}
              onLogout={props.onLogout}
            />
          </header>
        );
      }}
    </authContext.Consumer>
  );
};

export default MainHeader;
