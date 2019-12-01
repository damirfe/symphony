import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/index.scss";
import SignUp from "./containers/Login/SignUp";
import interceptors from "./interceptors";
import history from "./store";
import SignIn from "./containers/Login/SignIn";
import Navigation from "./containers/Navigation/Navigation";
import Favorites from "./containers/Favourites/Favorites";
import Dashboard from "./containers/Dashboard/Dashboard";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HotelDetails from "./components/Hotels/HotelDetails";

library.add(fas);
const loading = () => <div>Loading ...</div>;

function App() {
  interceptors.setupInterceptors(history);

  return (
    <Router>
      <div className="App">
        <Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route
              path="/(.+)"
              render={() => (
                <>
                  <Navigation />
                  <Switch>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/favorites" component={Favorites} />
                    <PrivateRoute
                      path="/details/:id"
                      component={HotelDetails}
                    />
                  </Switch>
                </>
              )}
            />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
