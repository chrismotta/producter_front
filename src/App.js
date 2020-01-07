import React, { useEffect } from "react";
import "./App.css";
import "./style/palette.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./components/Calendar";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cookie from "js-cookie";
import Admin from "./components/Admin";
// import { FIREBASE_CONFIG } from "./config/config";
// import firebase from "firebase";

function App() {
  const authToken = () =>
    Cookie.get("auth-token") ? Cookie.get("auth-token") : null;

  // useEffect(() => {
  //   firebase.initializeApp(FIREBASE_CONFIG);
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route
              exact
              path="/"
              render={() =>
                authToken() ? (
                  <Redirect to="/calendar" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path={["/calendar/:date", "/calendar"]}
              render={props =>
                authToken() ? <Calendar {...props} /> : <Redirect to="/login" />
              }
            />
            <Route path="/login" component={Login} />
            <Route
              path="/logout"
              render={() => {
                Cookie.remove("auth-token");
                return <Redirect to="/login" />;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
