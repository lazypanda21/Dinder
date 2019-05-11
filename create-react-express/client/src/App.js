import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/books" component={PageTwo} />
          <Route exact path="/books/:id" component={PageOne} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

