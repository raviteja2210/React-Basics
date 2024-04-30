import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

const CustomRedirect= () => {
  const isLoggedIn = false; // You can have your own logic to determine if the user is logged in

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <h1>Login Page</h1>}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default CustomRedirect;
