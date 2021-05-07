import React from "react";
import NavigationDrawer from "./components/navigationBar";
import AjoutPlante from "./pages/ajoutPlantes";
import { BrowserRouter, Route } from "react-router-dom";
import { Authcontext } from "./context/auth-context";
import { UserAuth } from "./hooks/auth";
import Login from "./pages/login";
import NavLogin from "./components/NavLogin";

function App() {
  const { userId, token, login, logout } = UserAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={AjoutPlante} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Login} />
      </React.Fragment>
    );
  }

  return (
    <div>
      <Authcontext.Provider
        value={{ userId: userId, token: token, login: login, logout: logout }}
      >
        {token ? <NavigationDrawer /> : <NavLogin />}

        <div style={{ marginTop: "8%" }}>
          <BrowserRouter>{routes}</BrowserRouter>
        </div>
      </Authcontext.Provider>
    </div>
  );
}

export default App;
