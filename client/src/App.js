import React from "react";
import Books from "./pages/Books";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => (
  <Router>
    <div>     
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />

        
        <Route exact path="/books" component={Books} />
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/books:id" component={Detail} />
        <Route exact path="/api/articlesGet component={Articles}" />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
