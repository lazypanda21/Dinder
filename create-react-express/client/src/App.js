import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import NoMatch from "./pages/NoMatch";
import history from './history'
import Search from "./pages/Search";
function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/dogs" component={PageTwo} />
         
          <Route exact path="/search" component={Search} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

