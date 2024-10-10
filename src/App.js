import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils";
import HomePage from "./containers/homepage";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import Information from "./containers/information";
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Information} />
          <Route path="/portfolio" exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
